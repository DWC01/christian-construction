import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HeroImage from '../src/components/home/HeroImage';
import Mission from '../src/components/home/Mission';
import Projects from '../src/components/home/Projects';
import About from '../src/components/home/About';
import LatestAchievements from '../src/components/home/LatestAchievements';
import Testimonials from '../src/components/home/Testimonials';
import Contact from '../src/components/home/Contact';

const useStyles = makeStyles(() => ({
	heroImageContainer: {
		marginTop: '30px',
	},
	missionContainer: {
		marginTop: '150px',
	},
	projectsContainer: {
		marginTop: '100px',
	},
	aboutContainer: {
		marginTop: '100px',
	},
	latestAchievementsContainer: {
		marginTop: '100px',
	},
	testimonialsContainer: {
		marginTop: '100px',
	},
	contactContainer: {
		marginTop: '100px',
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
			<Container>
				<div className={classes.missionContainer}>
					<Mission />
				</div>
				<div className={classes.projectsContainer}>
					<Projects />
				</div>
				<div className={classes.aboutContainer}>
					<About />
				</div>
				<div className={classes.latestAchievementsContainer}>
					<LatestAchievements />
				</div>
				<div className={classes.testimonialsContainer}>
					<Testimonials />
				</div>
				<div className={classes.contactContainer}>
					<Contact />
				</div>
			</Container>
		</>
	);
};

export default Index;
