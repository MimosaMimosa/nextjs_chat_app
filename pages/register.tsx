import { Button, Card, InputAdornment, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email'
import HttpsIcon from '@mui/icons-material/Https'
import TextField from '@mui/material/TextField'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'
import { blue, green, pink } from '@mui/material/colors'
import { useState } from 'react'
import Man2Icon from '@mui/icons-material/Man2'
import { indigo } from '@mui/material/colors'
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import Background from '@/components/background'
import Link from 'next/link'

enum Gender {
  Male = 1,
  Female = 2,
  Others = 3,
}

const register = () => {
  const [activeGender, setActiveGender] = useState<Gender>(Gender.Male)

  const handleGender = (value: Gender) => {
    setActiveGender(value)
  }

  return (
    <Background>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mr: 10 }}>
          <Typography variant="h1" sx={{ color: blue[500] }}>
            Chat Hub
          </Typography>
          <Typography variant="h5" sx={{ ml: 3 }}>
            Your new chatting application
          </Typography>
        </Box>
        <Box
          sx={{
            minWidth: {
              xs: '100%',
              md: '350px',
            },
            p: 4,
            backgroundColor: 'transparent',
          }}
        >
          <Box>
            <TextField
              size="small"
              fullWidth
              sx={{ mb: 2 }}
              label="Email"
              id="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              size="small"
              fullWidth
              sx={{ mb: 2 }}
              label="Password"
              id="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              size="small"
              fullWidth
              sx={{ mb: 2 }}
              label="Confirm Password"
              id="confirm-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CheckIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <Card
              onClick={() => {
                handleGender(Gender.Male)
              }}
              sx={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor:
                  activeGender === Gender.Male ? green[500] : 'transparent',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <MaleIcon sx={{ fontSize: '3rem', color: blue[500] }} />
                <Typography variant="h5" sx={{ fontSize: '15px' }}>
                  Male
                </Typography>
              </Box>
            </Card>
            <Card
              onClick={() => {
                handleGender(Gender.Female)
              }}
              sx={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor:
                  activeGender === Gender.Female ? green[500] : 'transparent',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <FemaleIcon sx={{ fontSize: '3rem', color: pink[500] }} />
                <Typography variant="h5" sx={{ fontSize: '15px' }}>
                  Female
                </Typography>
              </Box>
            </Card>
            <Card
              onClick={() => {
                handleGender(Gender.Others)
              }}
              sx={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor:
                  activeGender === Gender.Others ? green[500] : 'transparent',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Man2Icon
                  sx={{
                    fontSize: '3rem',
                    color: indigo[500],
                  }}
                />
                <Typography variant="h5" sx={{ fontSize: '15px' }}>
                  Others
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Button variant="contained" fullWidth>
              Sign Up
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/login" style={{ color: blue[500] }}>
              <Box component="span">
                if you have alerady account,go to login.
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Background>
  )
}

export default register
