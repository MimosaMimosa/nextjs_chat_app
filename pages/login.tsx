import { Card, FormControl, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system"
import image from '../public/images/login-bg.jpg';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Button from "@mui/material/Button";

const login = () => {
    const Background = styled('div')(() => `
        background-image: url(${image.src});
        background-attachment:fixed;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        min-height:100vh;
        width:100%;
    `)
    return (
        <Background>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Card sx={{ minWidth: '400px', p: 4, borderRadius: '15px', position: 'relative' }}>
                    <Typography variant="h1" sx={{ fontSize: '2em', mb: 2, textAlign: 'center' }}>
                        Login
                    </Typography>
                    <Box>
                        <TextField
                            fullWidth
                            sx={{ mb: 2 }}
                            label="Email"
                            id="email"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>,
                            }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            sx={{ mb: 2 }}
                            type='password'
                            label="Password"
                            id="password"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <HttpsIcon />
                                </InputAdornment>,
                            }}
                        />
                    </Box>
                    <Box>
                        <Button variant="contained" fullWidth sx={{ py: 2 }}>
                            Sign In
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Background>
    )
}

export default login
