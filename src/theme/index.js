import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const { primary, background } = colors;

const theme = createMuiTheme({
	typography: {
		fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		body1: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
		body2: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
	},
	palette: {
		primary: {
			main: primary,
		},
		// secondary: {
		// 	main: '#19857b',
		// },
		// error: {
		// 	main: red.A400,
		// },
		background: {
			default: background,
		},
	},
});

export default theme;
