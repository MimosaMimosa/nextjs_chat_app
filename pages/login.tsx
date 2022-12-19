import { Card, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Button from '@mui/material/Button';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { blue } from '@mui/material/colors';
import Link from 'next/link';
import Background from '@/components/background';
import { useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';

const login = () => {
    const email = useRef<HTMLInputElement|null>(null)
    const password = useRef<HTMLInputElement|null>(null);
    const router = useRouter();

    const handleSubmit = () => {
        axios.post('http://localhost:5000/api/v1/auth/login', {
            email: email.current?.value,
            password: password.current?.value,
        }).then(res => {
            Cookies.set('chat_hub', res.data.token)
            router.push('/');
        }).catch(error => {
            console.log(error.response.data)
        })
    }

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
                        backgroundColor: 'transparent',
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
                            inputRef={email}
                            size='small'
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
                            inputRef={password}
                            fullWidth
                            size='small'
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
                    <Box mb={2}>
                        <Button variant='contained' fullWidth onClick={handleSubmit}>
                            Sign In
                        </Button>
                    </Box>
                    <Box textAlign='center'>
                        <Link href='/register' style={{ color: blue[500] }}>
                            <Box component="span">If you dont have account?.Go to register.</Box>
                        </Link>
                    </Box>
                </Card>
            </Box>
        </Background>
    );
};

export default login;
