import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	menuContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px',
	},
	menuItem: {
		color: '#555',
		marginRight: '15px',
		borderBottom: '1px solid transparent',
		'&:hover': {
			borderBottom: '1px solid #555',
		},
	},
}));

const Menu = () => {
	const classes = useStyles();

	return (
		<div className={classes.menuContainer}>
			<Typography className={classes.menuItem}>About</Typography>
			<Typography className={classes.menuItem}>Portfolio</Typography>
			<Typography className={classes.menuItem}>Our Process</Typography>
			<Typography className={classes.menuItem}>Contact</Typography>
		</div>
	);
};

export default Menu;
