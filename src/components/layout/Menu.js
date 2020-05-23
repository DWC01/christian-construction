import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	menuContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px',
	},
	menuItem: {
		color: theme.palette.primary.main,
		marginRight: '15px',
	},
}));

const Menu = () => {
	const classes = useStyles();

	return (
		<div className={classes.menuContainer}>
			<Typography className={classes.menuItem}>About</Typography>
			<Typography className={classes.menuItem}>Portfolio</Typography>
			<Typography className={classes.menuItem}>Our Process</Typography>
			<Typography className={classes.menuItem}>Contatact</Typography>
		</div>
	);
};

export default Menu;
