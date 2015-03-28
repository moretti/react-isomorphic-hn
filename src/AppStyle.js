import { Colors } from './AppTheme';

const AppStyle = {
  body: {
    fontFamily: 'Verdana, Geneva, sans-serif',
    fontSize: 14,
    color: Colors.text,
  },

  a: {
    color: Colors.text,
    textDecoration: 'none',
  },

  'a:hover': {
    textDecoration: 'underline',
  },

  'a:visited': {
    color: Colors.secondary,
  },
};

export default AppStyle;
