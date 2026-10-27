// MATERIAL UI IMPORTS
import {
  Button,
  Input,
  InputAdornment,
  OutlinedInput,
  Box,
  Container,
  FormControl,
  FormHelperText
} from '@mui/material'

// MATERIAL UI ICONS
import SearchIcon from '@mui/icons-material/Search'


export default function SearchBar() {
  return (
    <>
      <Container sx={{ m: 0 }}>
        <FormControl fullWidth>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <OutlinedInput 
              id='my-input' 
              placeholder={'Search...'} 
              sx={{
                px:1,
                width: 'stretch'
              }}
            />

            <Button 
              variant='contained'
              startIcon={<SearchIcon />}
              sx={{
                display: { xs: 'none', md: 'inline-flex'}
              }}
            >
              Search
            </Button>

            <Button
              variant='contained'
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center'
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
          
          <FormHelperText>Capitalization doesn't matter, but queries with typos will not return the expected results.</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}