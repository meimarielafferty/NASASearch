// REACT IMPORTS
import * as React from 'react'

// MUI IMPORTS
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

// LOCAL ASSETS IMPORTS
import nasawhite from '../assets/NASA_WHITE_LOGO.png'

const pages = ['Code Breakdown', 'Data Structure', 'About Mei'];


export default function Nav() {

  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  }
  
  const handleCloseMobileMenu = () => {
    setAnchorNav(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, top: 0, position: 'sticky' }}>
        <AppBar position="static" sx={{ padding: {xs: '.5ch', md: '.5ch 5ch'} }}>
            <Toolbar  
              sx={{ 
                height: { xs: 56, sm: 64 },
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Box
                component='a'
                href='./'
                sx={{
                  display: 'flex',
                  height: '100%',
                  flexShrink: 0,
                  alignItems: 'center',
                }}
              >
                <Box
                  component='img'
                  src={nasawhite}
                  alt="NASA White Logo"
                  sx={{
                    display: {xs: 'block', md: 'block' },
                    height: 'calc(100% - 16px)',
                    width: 'auto',
                    objectFit: 'contain',
                    flexShrink: 0,
                    mr: 1,
                  }}
                />
              </Box>
              <Typography 
                variant='h5'
                component='a'
                href='./'
                sx={{
                  textDecoration: 'none',
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '0rem',
                  color: 'inherit',
                }}
              >
                RELIABILITY SEARCH
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    variant='text'
                    href={`./${page.toLowerCase().replace(/\s+/g, '-')}`}
                    
                    sx={{
                      color: 'inherit',
                      height: 'calc(100% + 16px)',
                      // fontWeight: 500,
                    }}
                  >
                    {`${page.toUpperCase().trim()}`}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  display: {xs: 'flex', md: 'none' },
                  justifyItems: 'end'
                }}
              >
                <IconButton
                  size='medium'
                  aria-haspopup='true'
                  onClick={ handleOpenMobileMenu }
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='mobile-menu'
                  anchorEl={ anchorNav }
                  keepMounted
                  open={ Boolean(anchorNav) }
                  onClose={ handleCloseMobileMenu }
                  sx={{ display: { xs: 'block', md: 'none'} }}
                >
                  {pages.map((page) => (
                    <MenuItem key={ page } onClick={ handleCloseMobileMenu }>
                      <Typography sx={{ textAlign: 'center' }}>{ page }</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}