
import { ThemeProvider } from '@mui/material'
import styled from 'styled-components'
import './App.scss'
import Header from './components/layout/header/Header'
import Sidebar from './components/layout/sidebar/Sidebar'
import Books from './pages/book/Books'
import customTheme from './theme'
import typography from './theme/typography'

const StyledApp = styled('div')({
  fontFamily: typography.base.fontFamily,
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight,
  lineHeight: typography.base.lineHeight,
  display: 'flex',
  flexDirection: 'row',
})

const PanelRight = styled('div')({
  padding: '0 30px 30px 0',
})

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <StyledApp>
          <Sidebar />
          <PanelRight>
            <Header />
            <Books />
          </PanelRight>
        </StyledApp>
      </ThemeProvider>
    </>
  )
}

export default App
