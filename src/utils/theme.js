import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colors: {
    white: '#fff',
    text: '#2a2a2a',
    textInverse: '#e3e3e3',
    accent: '#ff3907',
    background: '#67e6c2',
    hover: '#befb7c',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '34px',
    xl: '68px',
  },
  fontWeights: {
    regular: 400,
    normal: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '3px solid #67e6c2',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
});
