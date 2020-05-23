import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Menu from './Menu';

const useStyles = makeStyles(() => ({
	headerContainer: {
		margin: '30px auto 0 auto',
		width: '550px',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.headerContainer}>
			<Logo />
			<Menu />
		</div>
	);
};

export default Header;
