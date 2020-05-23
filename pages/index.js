import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../src/components/home/HeroImage';
import Mission from '../src/components/home/Mission';
import Projects from '../src/components/home/Projects';

const useStyles = makeStyles(() => ({
	heroImageContainer: {
		marginTop: '30px',
	},
	missionContainer: {
		marginTop: '30px',
	},
	projectsContainer: {
		marginTop: '30px',
		height: '500px',
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
			<div className={classes.projectsContainer}>
				<Projects />
			</div>
		</>
	);
};

export default Index;
