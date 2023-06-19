// import { CSSProperties } from 'react'
import { Theme } from '@mui/material/styles'

declare module '@mui/material/styles'{
    interface Palette {
        danger: {
            main:string
        }
    }

    interface PaletteOptions {
        danger: {
            main:string
        }
    }
}