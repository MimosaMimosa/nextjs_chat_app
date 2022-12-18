import Layout from '@/components/layout/layout'
import { Grid, Box, Card, Avatar } from '@mui/material'
import { styled } from '@mui/system'
import { grey, blue } from '@mui/material/colors'

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
}))

const Chat = () => {
  return (
    <Layout>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Card sx={{ p: 2 }}>
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
                </Box>
              </ChatArea>
            </Card>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Chat
