import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../src/components/images/HeroImage';

const useStyles = makeStyles(() => ({
	heroImageContainer: {
		marginTop: '30px',
	},
}));

const Index = () => {
	const classes = useStyles();

	return (
		<div className={classes.heroImageContainer}>
			<HeroImage />
		</div>
	);
};

export default Index;
