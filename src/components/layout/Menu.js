import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ListItemText from '@material-ui/core/ListItemText';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles(theme => ({
	list: {
		width: '100vw',
	},
	listItem: {
		textAlign: 'center',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	BackdropProps: {
		backgroundColor: 'rgba(250, 250, 250, 0.5)',
	},
	paper: {
		boxShadow: 'unset',
	},
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
			color: theme.palette.action.active,
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

		setState(!state);
	};

	return (
		<>
			<div className={classes.mobileMenuContainer}>
				<IconButton onClick={toggleDrawer()}>
					<MenuRoundedIcon
						onClick={toggleDrawer()}
						className={classes.mobileMenu}
					/>
				</IconButton>
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
				classes={{
					paper: classes.paper,
				}}
				ModalProps={{
					Paper: {
						root: classes.Paper,
					},
					BackdropProps: {
						classes: {
							root: classes.BackdropProps,
						},
					},
				}}
				anchor="left"
				variant="temporary"
				open={state}
				onClose={toggleDrawer()}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={toggleDrawer()}>
						<CloseRoundedIcon />
					</IconButton>
				</div>
				<List className={classes.list}>
					{['About', 'Portfolio', 'Our Process', 'Get Started'].map(
						text => (
							<ListItem
								key={text}
								className={classes.listItem}
								button
							>
								<ListItemText primary={text} />
							</ListItem>
						),
					)}
				</List>
			</Drawer>
		</>
	);
};

export default Menu;
