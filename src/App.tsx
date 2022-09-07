import React from 'react'
import Router from './routes/Router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
