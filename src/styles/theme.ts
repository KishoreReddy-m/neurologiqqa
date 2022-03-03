import { createTheme, responsiveFontSizes } from '@mui/material';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';
import { grey, amber } from '@mui/material/colors';

export const getAppTheme = (
  mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
) => {
  const selectedTheme = localStorage.getItem('mode');
  const light = {
    primary: {
      main: '#d1ff24',
    },
    secondary: {
      main: '#1e3958',
    },

    divider: '#65D195',
    background: {
      default: '#EDEDF2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1e3958',
      secondary: '#00D590',
    },
  };
  const dark = {
    // palette values for dark mode
    primary: {
      main: '#d1ff24',
    },
    secondary: {
      main: '#65D195',
    },
    divider: '#022C33',
    background: {
      default: '#171934',
      paper: '#1e3958',
    },
    text: {
      primary: "#FFFFFF",
      // secondary: "#65D195",
      hint: "#00d590",
    },
  };
  console.log('theme mode', mode);
  let theme = createTheme({
    palette: {
      mode,
      ...((selectedTheme ?? mode) === 'light' ? light : dark),
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};
