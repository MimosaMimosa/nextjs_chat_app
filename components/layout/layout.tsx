import Grid from '@mui/material/Grid';
import { blue, green, grey } from '@mui/material/colors';
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import SearchBar from '../searchBar';

// const SearchBar = styled('div')(
//   () => `
//     border:2px solid ${blue[500]};
//     padding:4px 2px 4px 10px;
//     border-radius:5px;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     flex:1;
// `,
// )

// const InputSearch = styled('input')({
//   width: '100%',
//   border: 'none',
//   '&:focus': {
//     outline: 'none',
//   },
// })

const Layout = ({ children }: { children: any }) => {
  const session: any = useSession();
  const router = useRouter();

  const handleLogout = () => {
    signOut({ redirect: false })
      .then(function () {
        router.push('/login');
      })
  }

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
          <Link href="/">
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
          </Link>
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
          <Link href='/chat'>
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
          </Link>
          <Box
            onClick={handleLogout}
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
            <LogoutIcon sx={{ color: 'white' }} />
            <Box ml={2}>Logout</Box>
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
          <SearchBar placeholder='Search anything' />
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
            {session.data?.user.name || session.data?.user.email ? <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: green[500], width: '30px', height: '30px', mr: 1 }}>N</Avatar>
                {session.data.user.name || session.data.user.email}
              </Box>
            </Box> : null}
          </Stack>
        </Box>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
