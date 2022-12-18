import { Card, Grid, TextField, Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'

const UpdateForm = () => {
  return (
    <Box>
      <Card sx={{ p:3 }}>
        <Typography variant="h5" component="h2" mb={2} fontWeight="bold">
          Change User Information here
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={3}>
          <Grid item md={6}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="text"
                label="Name"
                id="name"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="email"
                label="Email"
                id="email"
              />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="text"
                label="Address"
                id="address"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="text"
                label="City"
                id="city"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="text"
                label="State"
                id="state"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                type="text"
                label="Zip Code"
                id="zip-code"
              />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box>
              <Button variant="contained" fullWidth color="primary">
                Update Information
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default UpdateForm
