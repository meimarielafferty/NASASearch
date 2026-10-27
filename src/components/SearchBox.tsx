// MATERIAL UI IMPORTS
import {
  Paper,
  Container,
  Typography,
  Box
} from '@mui/material'

// COMPONENT IMPORTS
import SearchBar from './SearchBar';

export default function SearchBox() {
  return (
    <>
      <Paper elevation={3}>
        <Container
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          <Typography
            variant='body1'
            sx={{
              textAlign: 'center',
              m: { xs: 2, md: 6 },
            }}
          >
            The algorithm is a simple search that returns results based on relevance to the query string. It is designed to search through nested data stored in classes, determine the relevancy of each result, and return formatted results based on the result type. The code was designed as an in house solution for a broken API and to improve maintainability for developers when updating the site data. The system used to store the data improved readability, reduced redundant code and streamlined site updates. The data is stored on the server to allow the site to remain database independent.
          </Typography>
          
          <Box>
            <SearchBar />
          </Box>

          
        </Container>
      </Paper>
    </>
  )
}