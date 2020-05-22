import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		backgroundColor: '#fff',
		height: '100vh',
	},
	logoText: {
		color: theme.palette.primary.main,
	},
	logoImg: {
		width: '70px',
	},
	appBarRoot: {
		backgroundColor: '#fff',
	},
	constainerRoot: {
		backgroundColor: '#fff',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<AppBar
				classes={{
					root: classes.appBarRoot,
				}}
				position="static"
			>
				<Toolbar>
					<div className={classes.logoContainer}>
						<Typography variant="h6" className={classes.logoText}>
							Christian
						</Typography>
						<img
							className={classes.logoImg}
							src="/christian-construction-logo.png"
							alt="christian-contruction-logo"
						/>
						<Typography variant="h6" className={classes.logoText}>
							Construction
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Container
				classes={{
					root: classes.constainerRoot,
				}}
			>
				{children}
			</Container>
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
