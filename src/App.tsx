import React from 'react'
import { Router } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import history from './services/history'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
