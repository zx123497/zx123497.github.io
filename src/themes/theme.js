import { createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
            glare: '#BBBBBB',
        },
        primary: {
            main: 'rgb(117, 13, 252)',
            light: orange[50],
            dark: orange[900],
        },
        secondary: {
            main: '#FF194D',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400,
        },
    },
})

export default theme
