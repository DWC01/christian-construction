import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
	menuContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px',
	},
	menuItem: {
		marginRight: '15px',
		borderBottom: '1px solid transparent',
		'&:hover': {
			borderBottom: '1px solid #555',
		},
	},
	mobileMenuContainer: {
		display: 'none',
	},
	'@media (max-width: 470px)': {
		menuContainer: {
			display: 'none',
		},
		mobileMenuContainer: {
			display: 'block',
			position: 'absolute',
			top: '15px',
			left: '15px',
		},
		mobileMenu: {
			fontSize: '2rem',
		},
	},
}));

const Menu = () => {
	const classes = useStyles();
	const [state, setState] = useState(false);

	const toggleDrawer = () => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		console.log('---state', state);
		setState(!state);
	};

	return (
		<>
			<div className={classes.mobileMenuContainer}>
				<MenuRoundedIcon
					onClick={toggleDrawer()}
					className={classes.mobileMenu}
				/>
			</div>
			<div className={classes.menuContainer}>
				<Typography className={classes.menuItem}>About</Typography>
				<Typography className={classes.menuItem}>Portfolio</Typography>
				<Typography className={classes.menuItem}>
					Our Process
				</Typography>
				<Typography className={classes.menuItem}>Contact</Typography>
			</div>
			<Drawer
				anchor="left"
				variant="temporary"
				open={state}
				onClose={toggleDrawer()}
			>
				<ListItem>
					<ListItemText primary="text" />
				</ListItem>
			</Drawer>
		</>
	);
};

export default Menu;
