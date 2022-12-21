import Layout from '@/components/layout/layout'
import { Grid, Box, Card, Avatar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { grey, blue, green } from '@mui/material/colors'
import Badge from '@/components/badge'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { getSession } from 'next-auth/react'
import { unstable_getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from './api/auth/[...nextAuth]'
interface MessageBoxProps {
    sender: number
}

const ChatMessageBox = styled('div')((props: MessageBoxProps) => ({
    display: 'flex',
    justifyContent: props.sender === 1 ? 'start' : 'end',
    marginBottom: '10px',
}))

const Messages = styled('p')((props: MessageBoxProps) => ({
    backgroundColor: props.sender === 1 ? grey[100] : blue[500],
    borderRadius: '10px',
    padding: '10px',
    color: props.sender === 2 ? 'white' : 'inherit',
    marginBottom: '5px',
}))

const ChatArea = styled('div')(() => ({
    height: '70vh',
    display: 'flex',
    justifyContent: 'end',
    padding: '15px',
    overflowY: 'scroll',
    flexDirection: 'column',
    '&::-webkit-scrollbar': {
        width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: blue[500],
        borderRadius: '10px'
    }
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


const Chat = ({ user }) => {
    const [isConnected, setIsConnected] = useState<Boolean>(false);
    const [conservation, setConverstaion] = useState<any>({});

    useEffect(() => {
        const socket = io('ws://localhost:5000');
        socket.on('connect', () => {
            setIsConnected(true)

            socket.emit('hello', 'world');
        })

        socket.on('disconnect', () => {
            setIsConnected(false);
        });
    }, [])

    return (
        <Layout>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Card>
                            {!Object.keys(conservation).length ? <div>a</div> : <>

                                <Box sx={{ backgroundColor: grey[100], padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], cursor: 'pointer' }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >

                                        </Avatar>
                                        <div>
                                            <Typography component='h5' ml={2}>
                                                Wai Yan Lin <Badge backgroundColor={green[500]}>
                                                    {user.name}
                                                </Badge>
                                            </Typography>
                                        </div>
                                    </Box>
                                </Box>
                                <ChatArea>
                                    <Box sx={{ width: '100%' }}>
                                        {/* <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>Hello</Messages>
                                            <Messages sender={1}>Hello</Messages>
                                        </div>
                                    </ChatMessageBox> */}
                                        {[].map((conservation: any) => {
                                            return <Fragment key={conservation._id}>
                                                {conservation.sender === '639f4bf942e7e8cb97438f9d' ? <ChatMessageBox sender={1}>
                                                    <Avatar
                                                        sx={{ bgcolor: blue[500], mr: 1 }}
                                                        alt="Remy Sharp"
                                                    >
                                                        B
                                                    </Avatar>
                                                    <div>
                                                        <Messages sender={1}>{conservation.message}</Messages>
                                                        {/* <Messages sender={1}>Hello</Messages> */}
                                                    </div>
                                                </ChatMessageBox> : <ChatMessageBox sender={2}>
                                                    <Messages sender={2}>{conservation.message}</Messages>
                                                </ChatMessageBox>}
                                            </Fragment>
                                        })}
                                    </Box>
                                </ChatArea>
                                <InputMessageBox>
                                    <CameraAltIcon sx={{ cursor: 'pointer' }} />
                                    <SentimentSatisfiedAltIcon sx={{ mx: 1, cursor: 'pointer' }} />
                                    <InputMessage placeholder='Send Messages' />
                                    <SendIcon sx={{ mx: 1, cursor: 'pointer' }} />
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
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer', color: blue[500] }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
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

    return {
        props: {
            user: session?.user,
        }
    };
}

export default Chat
