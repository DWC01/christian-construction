import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

const useStyles = makeStyles(() => ({
	leftLine: {
		left: '10px',
		top: '-10px',
		width: '1px',
		height: '105%',
		position: 'absolute',
		backgroundColor: 'rgba(151, 174, 255, .3)',
	},
	rightLine: {
		rightt: '-10px',
		top: '-10px',
		width: '1px',
		height: '105%',
		position: 'absolute',
		backgroundColor: 'rgba(151, 174, 255, .3)',
	},
	aboutContainer: {
		margin: '0 auto',
		marginTop: '50px',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '0 15px',
	},
	aboutTextContainer: {
		display: 'inline-block',
		maxWidth: '750px',
		marginRight: '20px',
	},
	aboutText: {
		margin: '10px 0',
	},
	profileImage: {
		display: 'inline-block',
		width: '300px',
		height: '250px',
		borderRadius: '3px',
	},
	'@media (max-width: 1284px)': {
		aboutContainer: {
			justifyContent: 'center',
		},
		aboutTextContainer: {
			maxWidth: '500px',
		},
	},
	'@media (max-width: 870px)': {
		aboutContainer: {
			flexDirection: 'column-reverse',
		},
		aboutTextContainer: {
			textAlign: 'center',
		},
		profileImage: {
			width: '200px',
			height: '200px',
			marginBottom: '30px',
		},
	},
}));

const About = () => {
	const classes = useStyles();
	return (
		<Section header="Company" closedSection>
			<div className={classes.aboutContainer}>
				<div className={classes.aboutTextContainer}>
					<Typography>
						Since 1990, Christian Construction has helped local
						homeowners make their remodeling dreams a reality. Our
						detailed craftsmenship and personal attention to each
						project ensures that every customer is 100% satisfied.
						As the owner, Wayne Christian personally oversees every
						job from start to finish.
					</Typography>
					<Typography className={classes.aboutText}>
						We listen to our clients. We make note of all of the
						things that are important to you no matter how small the
						detail. We've heard many times from our past homeowners
						that it was the small things we did that made the job go
						so smoothly. We will do everything we can to gain your
						confidence, so you can sit back and enjoy watching your
						dream come true.
					</Typography>
				</div>
				{/* <picture className={classes.aboutPictureContainer}>
					<source
						type="image/webp"
						loading="lazy"
						className={classes.projectCoverImage}
						srcSet="/home/profile-photo.webp"
						alt="project-cover"
					/>
					<img
						loading="lazy"
						className={classes.profileImage}
						src="/home/profile-photo.jpg"
						alt="profile"
					/>
				</picture> */}
			</div>
		</Section>
	);
};

export default About;
