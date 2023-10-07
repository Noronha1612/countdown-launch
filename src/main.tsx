import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
)
