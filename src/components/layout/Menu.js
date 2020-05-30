import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import MobileMenuIcon from './MobileMenuIcon';
import Link from '../global/Link';

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
		color: theme.palette.text.primary,
		marginRight: '15px',
		borderBottom: '1px solid transparent',
		'&:hover': {
			textDecoration: 'none',
			borderBottom: '1px solid #555',
		},
	},
	mobileMenuContainer: {
		display: 'none',
	},
	closeRoundedIcon: {
		fill: theme.palette.text.primary,
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
			color: theme.palette.text.primary,
		},
		menuItem: {
			display: 'block',
			color: theme.palette.text.primary,
			marginRight: '0',
			borderBottom: '1px solid transparent',
			'&:hover': {
				textDecoration: 'none',
				borderBottom: '1px solid transparent',
			},
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

	const links = [
		{
			text: 'Home',
			path: '/',
		},
		{
			text: 'About',
			path: '/about',
		},
		{
			text: 'Portfolio',
			path: '/portfolio',
		},
		{
			text: 'Our Process',
			path: '/our-process',
		},
		{
			text: 'Contact',
			path: '/contact',
		},
	];

	return (
		<>
			<div className={classes.mobileMenuContainer}>
				<IconButton onClick={toggleDrawer()}>
					<MobileMenuIcon />
				</IconButton>
			</div>
			<div className={classes.menuContainer}>
				{links.map(({ text, path }) => (
					<Link href={path} className={classes.menuItem}>
						<Typography>{text}</Typography>
					</Link>
				))}
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
					<IconButton
						className={classes.mobileMenuContainer}
						onClick={toggleDrawer()}
					>
						<CloseRoundedIcon
							className={classes.closeRoundedIcon}
						/>
					</IconButton>
				</div>
				<List className={classes.list}>
					{links.map(({ text, path }) => (
						<Link
							onClick={toggleDrawer()}
							href={path}
							className={classes.menuItem}
						>
							<ListItem
								key={text}
								className={classes.listItem}
								button
							>
								<ListItemText primary={text} />
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default Menu;
