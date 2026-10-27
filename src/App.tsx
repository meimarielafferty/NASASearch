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
import Hero from './components/Hero'
import SearchBox from './components/SearchBox'

// LOCAL ASSET IMPORTS
import nasalogo from './assets/NASA_Logo.webp'


function App() {

  return (
    <>
      <Nav />

      <Box sx={{ height: '4ch' }}></Box>

      <Container sx={{ mt: 2 }}>
        
        <Hero />
        
        <Box sx={{ height: '6ch' }}></Box>

        <SearchBox />

        <Box sx={{ height: '6ch' }}></Box>

      </Container>

    </>
  )
}

export default App
