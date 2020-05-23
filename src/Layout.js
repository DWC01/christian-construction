import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/layout/Header';

const useStyles = makeStyles(() => ({
	root: {},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.parallax}>
			<div
				className={`${classes.parallaxLayer} ${classes.parallaxLayerBack}`}
			>
				<div className={classes.heroImageContainer}>
					<Header />
				</div>
			</div>
			<div
				className={`${classes.parallaxLayer} ${classes.parallaxLayerBase}`}
			>
				{children}
			</div>
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
