// REACT IMPORTS
import { useState } from 'react'

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

// COMPONENT IMPORTS
import Nav from './components/Nav'

// LOCAL ASSET IMPORTS
import nasalogo from './assets/NASA_Logo.webp'


function App() {

  return (
    <>
      <Nav />

      <Box sx={{ height: '4ch' }}></Box>

      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid size={{ xs: 8, md: 4}} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  width: '80%',
                  height: '80%',
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
              alignItems: { xs: 'center', md: 'flex-start'}
            }}
          >
              <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'justify' } }}>
                This application was created to give a face to the search algorithm created for NASA's Reliability site which serves as a public directory for reliability resources. Some of the resources are published by NASA, and some are external resources utilized and endorsed by the NASA Reliability team.
              </Typography>
              <div style={{ height: '4ch' }}></div>
              <Button variant="contained">Visit Reliability Site</Button>
          </Grid>
        </Grid>
        <div style={{ height: '4ch' }}></div>
        <Paper 
          elevation={ 3 }
          
        >
          <Container sx={{ p: 4 }}>
            <Typography variant='body1' sx={{ textAlign: 'center', m: 4 }}>
              The algorithm is a simple search that returns results based on relevance to the query string. It is designed to search through nested data stored in classes, determine the relevancy of each result, and return formatted results based on the result type. The code was designed as an in house solution for a broken API and to improve maintainability for developers when updating the site data. The system used to store the data improved readability, reduced redundant code and streamlined site updates. The data is stored on the server to allow the site to remain database independent.
            </Typography>
          </Container>
        </Paper>
      </Container>

    </>
  )
}

export default App
