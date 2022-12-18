import Layout from '@/components/layout/layout'
import { Grid, Box, Card, Avatar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { grey, blue, green } from '@mui/material/colors'
import Badge from '@/components/badge'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

interface MessageBoxProps {
    sender: number
}

const ChatMessageBox = styled('div')((props: MessageBoxProps) => ({
    display: 'flex',
    justifyContent: props.sender === 1 ? 'start' : 'end',
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
    alignItems: 'end',
    padding: '15px',
    overflow: 'hidden',
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
    borderRadius:'10px',
    padding: "10px",
    display: 'flex',
    justifyContent:'space-between',
    cursor:'pointer',
}))

const Chat = () => {
    return (
        <Layout>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Card>
                            <Box sx={{ backgroundColor: grey[100], padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: blue[500], cursor: 'pointer' }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <div>
                                        <Typography component='h5' ml={2}>
                                            Wai Yan Lin <Badge backgroundColor={green[500]}>
                                                Active
                                            </Badge>
                                        </Typography>
                                    </div>
                                </Box>
                            </Box>
                            <ChatArea>
                                <Box sx={{ width: '100%' }}>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
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
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Hi</Messages>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={1}>
                                        <Avatar
                                            sx={{ bgcolor: blue[500], mr: 1 }}
                                            alt="Remy Sharp"
                                            src="/broken-image.jpg"
                                        >
                                            B
                                        </Avatar>
                                        <div>
                                            <Messages sender={1}>I wanna see you</Messages>
                                            <Messages sender={1}>I miss you</Messages>
                                        </div>
                                    </ChatMessageBox>
                                    <ChatMessageBox sender={2}>
                                        <Messages sender={2}>Mee too</Messages>
                                    </ChatMessageBox>
                                </Box>
                            </ChatArea>
                            <InputMessageBox>
                                <CameraAltIcon sx={{ cursor: 'pinter' }} />
                                <SentimentSatisfiedAltIcon sx={{ mx: 1, cursor: 'pinter' }} />
                                <InputMessage placeholder='Send Messages' />
                                <SendIcon sx={{ mx: 1, cursor: 'pointer' }} />
                            </InputMessageBox>
                        </Card>
                    </Grid>
                    <Grid item md={5}>
                        <Card sx={{ padding: '15px' }}>
                            <Box>
                                <Typography variant='h5' component='h5'>
                                    Messages
                                </Typography>
                            </Box>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                            <ConservationCard sx={{ mt:2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: 'white', cursor: 'pointer' ,color:blue[500]}}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>
                                    <Typography component="span" sx={{ mx:2 }}>
                                            Wai Yan Lin
                                    </Typography>
                                    <Typography sx={{ fontSize:'0.7rem' }}>
                                        Did you under stand...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize:'0.7rem',mx:2 }}>
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

export default Chat
