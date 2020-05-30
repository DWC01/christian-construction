import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/layout/Header';

const useStyles = makeStyles(() => ({
	root: {},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header />
			<main>{children}</main>
		</div>
	);
};

Layout.defaultProps = {
	children: <div />,
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
