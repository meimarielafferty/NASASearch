import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'

// FONT IMPORTS
import '@fontsource/roboto-condensed/400.css'
import '@fontsource/roboto-condensed/400-italic.css'
import '@fontsource/roboto-condensed/500.css'
import '@fontsource/roboto-condensed/500-italic.css'
import '@fontsource/roboto-condensed/600.css'
import '@fontsource/roboto-condensed/600-italic.css'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/roboto-condensed/700-italic.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/400-italic.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/500-italic.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/600-italic.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/700-italic.css'



import App from './App.tsx'

import theme from './styles/theme.ts'

import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>

  </StrictMode>
)
