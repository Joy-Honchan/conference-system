/// <reference path="index.d.ts"/>
import { useState, useMemo, createContext } from 'react'
import { amber, cyan, grey } from '@mui/material/colors'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Palette
} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(
    useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            lighter: cyan[200],
            light: cyan[300],
            main: cyan[500],
            dark: cyan[700],
            darker: cyan[800]
          },
          text:
            mode === 'light'
              ? {
                  primary: grey[800],
                  contrast: grey[200]
                }
              : { primary: grey[300], contrast: grey[800] },
          ...(mode === 'dark' && {
            background: {
              default: grey[800]
            }
          })
        },
        components: {
          // MuiButton: {
          //   styleOverrides: {
          //     root: ({ ownerState, theme }) => ({
          //       // ...(ownerState.className === 'btn' && {
          //       //   backgroundColor: 'red'
          //       // }),
          //       color: theme.palette.text.primary
          //     })
          //   }
          // },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: '25px'
              }
            }
          }
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemeProvider
