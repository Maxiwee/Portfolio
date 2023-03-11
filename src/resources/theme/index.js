import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('white', colors.brand.blackP)(props),
      color: mode(colors.brand.blackP, colors.brand.witheP)(props),
      fontFamily: 'Rubik',
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    blackP: '#202020',
    yellowP: '#FFD100',
    witheP: '#D6D6D6',
  },
};

const breakpoints = {
  sm: '500px',
  md: '700px',
  lg: '900px',
  xl: '1200px',
  '2xl': '1536px',
};

export const theme = extendTheme({ colors, config, styles, breakpoints });
