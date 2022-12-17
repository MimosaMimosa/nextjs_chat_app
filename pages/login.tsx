import { Card, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Button from '@mui/material/Button';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { blue } from '@mui/material/colors';
import Link from 'next/link';

const login = () => {
    const Background = styled('div')(
        () => `
        min-height:100vh;
        width:100%;
    `
    );
    return (
        <Background>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Card
                    sx={{
                        minWidth: {
                            xs: '100%',
                            md: '350px',
                        },
                        p: 4,
                        borderRadius: {
                            md: '15px',
                        },
                        position: 'relative',
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{ mb: 2, textAlign: 'center' }}
                    >
                        <ContactSupportIcon
                            sx={{ color: blue[500], fontSize: '5rem' }}
                        />
                    </Typography>
                    <Box>
                        <TextField
                            fullWidth
                            sx={{ mb: 2 }}
                            label='Email'
                            id='email'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            sx={{ mb: 2 }}
                            type='password'
                            label='Password'
                            id='password'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <HttpsIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box mb={3}>
                        <Button variant='contained' fullWidth sx={{ py: 2 }}>
                            Sign In
                        </Button>
                    </Box>
                    <Box textAlign='center'>
                        <Link href='/register' style={{ color: blue[500] }}>
                            If you dont have account?.Go to register.
                        </Link>
                    </Box>
                </Card>
            </Box>
        </Background>
    );
};

export default login;
