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
		margin: '150px 0',
	},
	section: {
		marginTop: '100px',
	},
	'@media (max-width: 430px)': {
		missionContainer: {
			margin: '50px 0',
		},
		section: {
			marginTop: '75px',
		},
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
				<div className={classes.section}>
					<Projects />
				</div>
				<div className={classes.section}>
					<About />
				</div>
				<div className={classes.section}>
					<LatestAchievements />
				</div>
				<div className={classes.section}>
					<Testimonials />
				</div>
				{/* <div className={classes.section}>
					<Contact />
				</div> */}
			</Container>
		</>
	);
};

export default Index;
