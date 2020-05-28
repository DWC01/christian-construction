import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	mobileMenuIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'column',
		width: '25px',
		height: '25px',
	},
	top: {
		height: '1px',
		width: '100%',
		backgroundColor: theme.palette.text.primary,
	},
	middle: {
		height: '1px',
		width: '100%',
		backgroundColor: theme.palette.text.primary,
	},
	bottom: {
		height: '1px',
		width: '100%',
		backgroundColor: theme.palette.text.primary,
	},
}));

const Menu = () => {
	const classes = useStyles();

	return (
		<div className={classes.mobileMenuIcon}>
			<div className={classes.top} />
			<div className={classes.middle} />
			<div className={classes.bottom} />
		</div>
	);
};

export default Menu;
