// REACT IMPORTS
import { useState, type SubmitEvent } from 'react';

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
} from '@mui/material';

// MATERIAL UI ICONS
import SearchIcon from '@mui/icons-material/Search';

// SCRIPTS
import runSearchtest from '../../backend/search/searchtest';
import { handleSearch } from '../../backend/search/handleSearch';


export default function SearchBar() {

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {

    event.preventDefault(); // prevents browser reload

    const form = event.target;
    const formData = new FormData(form);
    const query = formData.get('query');
    let error = null;

    if(typeof query != 'string') {
      error = 'Query is not a string.';
    } else if(query == null || query == '') {
      error = 'Please enter a search query.';
    } 

    handleSearch(query, error);

  }

  return (
    <>
      <Container sx={{ m: 0, p: 0 }}>
        <FormControl fullWidth>
          <Box
            component='form'
            onSubmit={ handleSubmit }
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <OutlinedInput 
              name='query'
              placeholder={'Search...'} 
              size='small'
              endAdornment={<MobileSearchIcon />}
              sx={{
                px: 1,
                flex: 1
              }}
            />

            <Button 
              type='submit'
              variant='contained'
              startIcon={<SearchIcon />}
              sx={{
                display: { xs: 'none', md: 'inline-flex'},
                justifyContent: 'center'
              }}
            >
              Search
            </Button>

          </Box>
          
          <FormHelperText sx={{ textAlign: 'center' }}>Capitalization doesn't matter, but queries with typos will not return the expected results.</FormHelperText>
        </FormControl>
      </Container>
    </>
  );

} // SearchBar()


// Custom search icon, displays only in mobile
function MobileSearchIcon() {

  return (
      <SearchIcon 
        sx={{
          display: {xs: 'inline', md: 'none'},
          opacity: '50%'
        }}
      />
  );

}