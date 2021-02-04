import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"


const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Merriweather', 'serif'],
    // See below for the full list of options.
  })

export const { scale, rhythm, options } = typography
export default typography