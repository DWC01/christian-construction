import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../src/components/images/HeroImage';
import Mission from '../src/components/home/Mission';

const useStyles = makeStyles(() => ({
	heroImageContainer: {
		marginTop: '30px',
	},
	missionContainer: {
		marginTop: '30px',
	},
}));

const Index = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.heroImageContainer}>
				<HeroImage />
			</div>
			<div className={classes.missionContainer}>
				<Mission />
			</div>
		</>
	);
};

export default Index;
