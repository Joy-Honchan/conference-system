/// <reference path="index.d.ts"/>
import { CssBaseline } from '@mui/material'
import { orange } from '@mui/material/colors'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'

const ThemeProvider = ({children}:{children:React.ReactNode}) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      danger: { main: orange[500] }
    }
  })

  return <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
}

export default ThemeProvider

