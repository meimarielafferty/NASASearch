// MATERIAL UI IMPORTS
import {
  Button,
  Toolbar,
  Typography,
  AppBar,
  Box,
  Grid,
  Container,
  Paper,
} from '@mui/material'

// LOCAL ASSET IMPORTS
import nasalogo from '../assets/NASA_Logo.webp'

export default function Hero() {

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: { xs: '0 10%', md: '0 15%' }
        }}
      >
        <Grid size={{ xs: 8, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: { xs: '90%', md: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Box
              component='img'
              src={nasalogo}
              alt='NASA Logo'
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }
          }}
        >
          <Typography variant='h6' sx={{ textAlign: { xs: 'center', md: 'justify' } }}>
            This application was created to give a face to the search algorithm created for NASA's Reliability site which serves as a public directory for reliability resources. Some of the resources are published by NASA, and some are external resources utilized and endorsed by the NASA Reliability team.
          </Typography>
          <div style={{ height: '4ch' }}></div>
          <a
            href='https://sma.nasa.gov/reliability/'
            target='_blank'
          >
            <Button variant='outlined'>Visit Reliability Site</Button>
          </a>
        </Grid>
      </Grid>
    </>
  )

}
