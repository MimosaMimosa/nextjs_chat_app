import Layout from '@/components/layout/layout'
import { Grid, Box, Card, Avatar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { grey, blue, green, red } from '@mui/material/colors'
import Badge from '@/components/badge'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';
import { useEffect, useState, useRef, Fragment, useCallback } from 'react'
import axios from 'axios'
import { unstable_getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from './api/auth/[...nextAuth]'
import SearchBar from '@/components/searchBar'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveUsers, addConversation, addMessage } from 'redux/slice/messengerSlice'
import { TMessages } from 'redux/slice/messengerSlice'

interface MessageBoxProps {
    sender: number
}

const ChatMessageBox = styled('div')((props: MessageBoxProps) => ({
    display: 'flex',
    justifyContent: props.sender === 1 ? 'start' : 'end',
    marginBottom: '5px',
}))

const Messages = styled('p')((props: MessageBoxProps) => ({
    backgroundColor: props.sender === 1 ? grey[100] : blue[500],
    borderRadius: '10px',
    padding: '10px',
    color: props.sender === 2 ? 'white' : 'inherit',
    marginBottom: '1px',
}))

const ChatArea = styled('div')(() => ({
    flex: '1 1 auto',
    overflowY: 'auto',
    minHeight: '0px',
    display: 'flex',
    justifyContent: 'end',
    padding: '15px 15px 0px 15px',
    flexDirection: 'column',
}))

const InputMessageBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    background: grey[100],
    padding: '15px',
}))

const InputMessage = styled('input')(() => ({
    border: `1px solid ${blue[500]}`,
    borderRadius: '10px',
    width: '100%',
    padding: '10px',
    '&:focus': {
        outline: 'none'
    }
}))

const ConservationCard = styled('div')(() => ({
    border: `1px solid ${blue[500]}`,
    borderRadius: '10px',
    padding: "10px",
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
}))


const Chat = ({ user, conversations }: any) => {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [conversationId, setConversationId] = useState<string>('');
    const [message, setMessage] = useState<string>('')
    const [searchUser, setSearchUser] = useState<any>([]);

    const messenger = useSelector((state: any) =>
        state.messenger.conversations.find(
            (c: any) => c._id === conversationId));

    const activeUsers = useSelector((state: any) => state.messenger.activeUsers)

    const scrollRef = useRef<HTMLDivElement>()
    const socket = useRef<any>()
    const timeOutRef = useRef<any>();

    useEffect(() => {
        if (conversationId) {
            axios.get(process.env.NEXT_PUBLIC_API_URL as string + `/conversations/${conversationId}/messages`, {
                headers: {
                    authorization: user.token,
                }
            })
                .then(res => {
                    dispatch(addConversation(res.data.conversation))
                })
        }
    }, [conversationId])


    useEffect(() => {
        socket.current = io('ws://localhost:5000');
        socket.current.on('connect', () => {
            setIsConnected(true)
            socket.current.emit('addUser', user.id);
        })

        socket.current.on('activeUsers', (users: string[]) => {
            dispatch(addActiveUsers(users))
        })

        socket.current.on('getMessage', (data: any) => {
            if (data) {
                console.log(data);
                dispatch(addMessage(data));
            }
        })

        socket.current.on('disconnect', () => {
            setIsConnected(false);
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('disconnect');
            socket.current.off('getMessage');
            socket.current.off('activeUsers');
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
        }, 200)
    }, [messenger])

    const handleSendMessage = useCallback(() => {
        if (message) {
            const data = {
                conversationId,
                senderId: user.id,
                receiverId: conversations.find((c: any) => c._id === conversationId).friend._id,
                content: {
                    body: message,
                    contentType: 1,
                }
            }
            console.log(data);
            socket.current.emit('sendMessage', data)

            axios.post(process.env.NEXT_PUBLIC_API_URL as string + `/messages`, {
                conversationId,
                senderId: user.id,
                content: {
                    body: message,
                    contentType: 1,
                }
            }, {
                headers: {
                    authorization: user.token
                }
            }).then(res => {
                dispatch(addMessage(res.data.message))
                setMessage('');
            }).catch(error => {
                console.log(error);
            })
        }
    }, [message])

    const handleSearchUser = useCallback((e: any) => {
        clearTimeout(timeOutRef.current);
        timeOutRef.current = setTimeout(() => {
            if (e.target.value) {
                axios.get(process.env.NEXT_PUBLIC_API_URL as string + '/users/search', {
                    params: {
                        q: e.target.value
                    }
                }).then(res => {
                    if (res.data.users.length) {
                        setSearchUser(res.data.users)
                    }
                })
            } else {
                setSearchUser([]);
            }
        }, 300)
    }, [])

    const chatConversation = useCallback((e: any) => {
        setConversationId(e.currentTarget.id)
    }, [])

    const getInputMessage = useCallback((e: any) => {
        setMessage(e.currentTarget.value)
    }, []);

    return (
        <Layout>
            <Box sx={{ px: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Card>
                            {!messenger ? null : <>
                                <Box sx={{ backgroundColor: grey[100], padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], cursor: 'pointer' }}
                                        >
                                        </Avatar>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component='h5' mx={1}>
                                                {messenger.friend.name}
                                            </Typography>
                                            <Box>
                                                {activeUsers.includes(messenger.friend._id) ?
                                                    <Badge backgroundColor={green[500]}>
                                                        Active
                                                    </Badge> :
                                                    <Badge backgroundColor={red[500]}>
                                                        offline
                                                    </Badge>}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'end',
                                    flexWrap: 'wrap',
                                    scrollBehavior: 'smooth',
                                    overflowY: 'scroll',
                                    height: '70vh',
                                    '&::-webkit-scrollbar': {
                                        width: '5px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: blue[500],
                                        borderRadius: '10px'
                                    }
                                }} ref={scrollRef}>
                                    <ChatArea>
                                        <Box sx={{ width: '100%' }}>
                                            {messenger.messages?.map((message: TMessages) => {
                                                return <Fragment key={message._id}>
                                                    {message.senderId !== user.id ? <ChatMessageBox sender={1}>
                                                        <Avatar
                                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                                        >
                                                        </Avatar>
                                                        <div>
                                                            <Messages sender={1}>{message.content.body}</Messages>
                                                            {/* <Messages sender={1}>Hello</Messages> */}
                                                        </div>
                                                    </ChatMessageBox> :
                                                        <ChatMessageBox sender={2}>
                                                            <Messages sender={2}>{message.content.body}</Messages>
                                                        </ChatMessageBox>}
                                                </Fragment>
                                            })}
                                        </Box>
                                    </ChatArea>
                                </Box>
                                <InputMessageBox>
                                    <CameraAltIcon sx={{ cursor: 'pointer' }} />
                                    <SentimentSatisfiedAltIcon sx={{ mx: 1, cursor: 'pointer' }} />
                                    <InputMessage placeholder='Send Messages' value={message} onChange={getInputMessage} />
                                    <SendIcon sx={{ mx: 1, cursor: 'pointer' }} onClick={handleSendMessage} />
                                </InputMessageBox>
                            </>}
                        </Card>
                    </Grid>
                    <Grid item md={5}>
                        <Card sx={{ padding: '15px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                                <Typography variant='h5' component='h5' sx={{ flex: 1 }}>
                                    Messages
                                </Typography>
                                <SearchBar placeholder='Search User' onKeyDown={handleSearchUser} />
                            </Box>
                            {!searchUser.length ?
                                <Box>
                                    {conversations?.map((conversation: any) => {
                                        return <Fragment key={conversation._id}>
                                            <Box onClick={chatConversation} id={conversation._id}>
                                                <ConservationCard sx={{ mt: 2 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Avatar
                                                            sx={{ bgcolor: blue[500], cursor: 'pointer', }}
                                                        >
                                                        </Avatar>
                                                        <Typography component="span" sx={{ mx: 2 }}>
                                                            {conversation.friend.name}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '0.7rem' }}>
                                                            {conversation.message.content.body}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                                            2min ago
                                                        </Typography>
                                                        <Badge>5</Badge>
                                                    </Box>
                                                </ConservationCard>
                                            </Box>
                                        </Fragment>
                                    }
                                    )}
                                </Box>
                                : null}
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL as string + `/conversations`, {
        headers: {
            authorization: session.user.token
        }
    })

    return {
        props: {
            user: session?.user,
            conversations: res.data.conversations || null,
        }
    };
}

export default Chat
