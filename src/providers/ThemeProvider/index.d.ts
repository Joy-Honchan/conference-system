// import { CSSProperties } from 'react'
import { Theme } from '@mui/material/styles'

interface PaletteOptionType {
    lightest?: string
    lighter?: string
    darker?: string
    darkest?: string
}

interface TextColorType {
    contrast?: string
}

declare module '@mui/material/styles' {
    // interface Palette {
    //     danger: {
    //         main:string
    //     }
    // }

    // interface PaletteOptions {
    //     danger: {
    //         main:string
    //     }
    // }
    interface PaletteColor extends PaletteOptionType { }
    interface SimplePaletteColorOptions extends PaletteOptionType { }
    interface TypeText extends TextColorType { }
}