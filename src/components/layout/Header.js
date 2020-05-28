import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Menu from './Menu';

const useStyles = makeStyles(() => ({
	headerContainer: {
		marginTop: '15px',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.headerContainer}>
			<Container>
				<Logo />
				<Menu />
			</Container>
		</div>
	);
};

export default Header;
