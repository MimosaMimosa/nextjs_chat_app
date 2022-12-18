import Grid from '@mui/material/Grid'
import { FC } from 'react'
import { blue, grey } from '@mui/material/colors'
import { Badge, Box, Stack, Typography } from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2'
import SettingsIcon from '@mui/icons-material/Settings'
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const SearchBar = styled('div')(
  () => `
    border:2px solid ${blue[500]};
    padding:4px 2px 4px 10px;
    border-radius:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex:1;
`,
)

const InputSearch = styled('input')({
  width: '100%',
  border: 'none',
  '&:focus': {
    outline: 'none',
  },
})

const Layout: FC<any> = ({ children }) => {
  return (
    <Grid container>
      <Grid
        item
        md={2}
        sx={{
          backgroundColor: blue[500],
          minHeight: '100vh',
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: 'white',
            fontSize: '1.3em',
            textAlign: 'center',
            mt: 2,
            fontWeight: 'bold',
          }}
        >
          Chat Hub
        </Typography>
        <Stack spacing={1} mt={3}>
          <Box
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 6,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: blue[600],
                fontWeight: 400,
              },
            }}
          >
            <Person2Icon sx={{ color: 'white' }} />
            <Box ml={2}>Profile</Box>
          </Box>
          <Box
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 6,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: blue[600],
                fontWeight: 400,
              },
            }}
          >
            <SettingsIcon sx={{ color: 'white' }} />
            <Box ml={2}>Setting</Box>
          </Box>
          <Box
            sx={{
              py: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 6,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: blue[600],
                fontWeight: 400,
              },
            }}
          >
            <ChatBubbleIcon sx={{ color: 'white' }} />
            <Box ml={2}>Chatting</Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item md={10} sx={{ backgroundColor: grey[50] }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            py: 2,
            px: 4,
          }}
        >
          <SearchBar>
            <InputSearch placeholder="Search Anything" />
            <SearchIcon sx={{ color: blue[500] }} />
          </SearchBar>
          <Stack
            sx={{ alignItems: 'center', flex: 1, justifyContent: 'end' }}
            direction="row"
            spacing={2}
          >
            <NotificationsIcon sx={{ color: 'black' }} />
            <Badge badgeContent={4} color="error">
              <EmailIcon sx={{ color: 'black' }} />
            </Badge>
            <Person2Icon sx={{ color: 'black' }} />
          </Stack>
        </Box>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
