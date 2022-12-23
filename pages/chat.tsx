import Layout from '@/components/layout/layout'
import { Grid, Box, Card, Avatar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { grey, blue, green } from '@mui/material/colors'
import Badge from '@/components/badge'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { unstable_getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from './api/auth/[...nextAuth]'
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


const Chat = ({ user, conservations }: any) => {
    const [isConnected, setIsConnected] = useState<Boolean>(false);
    const [conservationId, setConservationId] = useState<string>('');
    const [conservationMessage, setConservationMessage] = useState<any>({})
    const [receiverId, seReceiverId] = useState<string>('');
    const [message, setMessage] = useState<string>('')
    const scrollRef = useRef<HTMLDivElement>()
    const socket = useRef<any>()

    useEffect(() => {
        if (conservationId) {
            axios.get(process.env.NEXT_PUBLIC_API_URL as string + `/conservations/${conservationId}/messages`)
                .then(res => {
                    setConservationMessage(res.data.conservation)
                })
        }
    }, [conservationId])


    useEffect(() => {
        socket.current = io('ws://172.20.30.44:5000');
        socket.current.on('connect', () => {
            setIsConnected(true)
            socket.current.emit('addUser', user.id);
        })
        
        socket.current.on('getMessage', (data: any) => {
            if (data) {
                setConservationMessage((prev: any) => {
                    if (Object.keys(prev).length) {
                        const addMessage = [...prev.messages, {
                            _id: new Date().getTime().toString(),
                            sender: data.senderId,
                            receiver: user.id,
                            message: data.message,
                        }
                        ]
                        return { ...prev, messages: addMessage }
                    }
                    return prev;
                })
            }
        })

        socket.current.on('disconnect', () => {
            setIsConnected(false);
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('disconnect');
            socket.current.off('getMessage');
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
        }, 200)
    }, [conservationMessage])

    const handleSendMessage = () => {
        if (message) {

            socket.current.emit('sendMessage', { senderId: user.id, receiverId: receiverId, message })

            axios.post(process.env.NEXT_PUBLIC_API_URL as string + `/messages`, {
                conservationId,
                sender: user.id,
                receiver: receiverId,
                message,
            }).then(res => {
                setConservationMessage((prev: any) => {
                    const addMessage = [...prev.messages, ...res.data.message]
                    return { ...prev, messages: addMessage }
                })
                setMessage('');
            })
        }
    }

    return (
        <Layout>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Card>
                            {!Object.keys(conservationMessage ?? {}).length ? <div>a</div> : <>

                                <Box sx={{ backgroundColor: grey[100], padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], cursor: 'pointer' }}
                                            alt="Remy Sharp"
                                        >
                                        </Avatar>
                                        <div>
                                            <Typography component='h5' ml={2}>
                                                {conservationMessage.member.filter((m: any) => {
                                                    return m._id !== user.id
                                                })[0].name} <Badge backgroundColor={green[500]}>
                                                    'Active'
                                                </Badge>
                                            </Typography>
                                        </div>
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
                                            {conservationMessage?.messages?.map((message: any) => {
                                                return <Fragment key={message._id}>
                                                    {message.sender !== user.id ? <ChatMessageBox sender={1}>
                                                        <Avatar
                                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                                            alt="Remy Sharp"
                                                        >
                                                        </Avatar>
                                                        <div>
                                                            <Messages sender={1}>{message.message}</Messages>
                                                            {/* <Messages sender={1}>Hello</Messages> */}
                                                        </div>
                                                    </ChatMessageBox> : <ChatMessageBox sender={2}>
                                                        <Messages sender={2}>{message.message}</Messages>
                                                    </ChatMessageBox>}
                                                </Fragment>
                                            })}
                                        </Box>
                                    </ChatArea>
                                </Box>
                                <InputMessageBox>
                                    <CameraAltIcon sx={{ cursor: 'pointer' }} />
                                    <SentimentSatisfiedAltIcon sx={{ mx: 1, cursor: 'pointer' }} />
                                    <InputMessage placeholder='Send Messages' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                                    <SendIcon sx={{ mx: 1, cursor: 'pointer' }} onClick={handleSendMessage} />
                                </InputMessageBox>
                            </>}
                        </Card>
                    </Grid>
                    <Grid item md={5}>
                        <Card sx={{ padding: '15px' }}>
                            <Box>
                                <Typography variant='h5' component='h5'>
                                    Messages
                                </Typography>
                            </Box>
                            {conservations?.map((conservation: any) => {
                                const receiver = conservation.member.filter((m: any) => {
                                    return m._id !== user.id
                                })[0]
                                return <Fragment key={conservation._id}>
                                    <Box onClick={() => { setConservationId(conservation._id); seReceiverId(receiver._id) }} >
                                        <ConservationCard sx={{ mt: 2 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{ bgcolor: blue[500], cursor: 'pointer', }}
                                                    alt="Remy Sharp"
                                                >
                                                </Avatar>
                                                <Typography component="span" sx={{ mx: 2 }}>
                                                    {receiver.name}
                                                </Typography>
                                                <Typography sx={{ fontSize: '0.7rem' }}>
                                                    {conservation.messages[0]?.message}
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

    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL as string + `/conservations/${session.user.id}`, {
        headers: {
            authorization: session.user.token
        }
    })

    return {
        props: {
            user: session?.user,
            conservations: res.data.conservations || null,
        }
    };
}

export default Chat
