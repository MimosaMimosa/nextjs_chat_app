import { styled } from '@mui/system'
import { Card, Avatar, Button, Box, Grid, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import Layout from '@/components/layout/layout'
import { useRef, ChangeEvent, useState } from 'react'
import UpdateForm from '@/components/user/form'

const ListOfSetting = styled(Card)({
  padding: '10px',
  marginBottom: '15px',
  border: `1px solid transparent`,
  cursor: 'pointer',
  '&:hover': {
    border: `1px solid ${blue[500]}`,
  },
})

const SettingLabel = styled('h5')({
  fontSize: '1.2em',
  fontWeight: 400,
})

const DetailOfSetting = styled('span')({
  color: grey[500],
})

const ProfilePhotoCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 25px',
  marginBottom: '15px',
})

const Index = () => {

  const fileRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string>('')

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.currentTarget.files?.[0]
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      setImage(fileReader.result as string)
    }
  }
  return (
    <Layout>
      <Box sx={{ py: 2, px: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <ListOfSetting>
              <SettingLabel>Account Setting</SettingLabel>
              <DetailOfSetting>'a'</DetailOfSetting>
            </ListOfSetting>
            <ListOfSetting>
              <SettingLabel>Account Setting</SettingLabel>
              <DetailOfSetting>asasa</DetailOfSetting>
            </ListOfSetting>
            <ListOfSetting>
              <SettingLabel>Account Setting</SettingLabel>
              <DetailOfSetting>asasa</DetailOfSetting>
            </ListOfSetting>
            <ListOfSetting>
              <SettingLabel>Account Setting</SettingLabel>
              <DetailOfSetting>asasa</DetailOfSetting>
            </ListOfSetting>
          </Grid>
          <Grid item md={8}>
            <ProfilePhotoCard>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ width: '60px', height: '60px' }} src={image}>
                  W
                </Avatar>
                <Typography
                  fontSize={'1.2rem'}
                  component="h5"
                  ml={2}
                  fontWeight={'bold'}
                >
                  Upload a New Photo<br></br>
                </Typography>
                <input
                  type="file"
                  hidden
                  id="profile"
                  ref={fileRef}
                  onChange={handleFileChange}
                />
              </Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => fileRef.current?.click()}
              >
                Update
              </Button>
            </ProfilePhotoCard>
            <UpdateForm />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
export default Index
