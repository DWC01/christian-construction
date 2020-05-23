import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './components/Logo';

const useStyles = makeStyles(theme => ({
	headerContainer: {
		marginTop: '60px',
	},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<>
			<Container>
				<div className={classes.headerContainer}>
					<Logo />
				</div>

				{children}
			</Container>
		</>
	);
};

Layout.defaultProps = {
	children: <div />,
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
