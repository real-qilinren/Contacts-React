import { createTheme } from '@mui/material/styles';

const colorTokens = {
    orange: {
        50: "#FFF7E6",
        100: "#FFEACC",
        200: "#FFD199",
        300: "#FFB766",
        400: "#FF9D33",
        500: "#FF8200",
        600: "#CC6800",
        700: "#994E00",
        800: "#663400",
        900: "#331A00",
    },
};

const themeSettings = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: colorTokens.orange[500],
                dark: colorTokens.orange[700],
                light: colorTokens.orange[300],
            },
            background: {
                default: mode === 'dark' ? colorTokens.orange[900] : colorTokens.orange[50]
            }
        },
        typography: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 14,
            h1: {
                fontSize: 32,
            },
            h2: {
                fontSize: 28,
            },
            h3: {
                fontSize: 24,
            },
            h4: {
                fontSize: 20,
            },
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
        },
    });
};

export default themeSettings;