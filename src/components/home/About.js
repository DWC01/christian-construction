import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	aboutContainer: {
		height: '500px',
		maxWidth: '1200px',
		margin: '0 auto',
	},
	headerContainer: {
		textAlign: 'center',
	},
	header: {
		fontSize: '1.2rem',
		width: '150px',
		margin: '0 auto',
		padding: '0 0 10px 0',
		borderBottom: '1px solid #ddd',
	},
	aboutDataContainer: {
		marginTop: '50px',
		display: 'flex',
	},
	aboutTextContainer: {
		display: 'inline-block',
		width: '624px',
	},
	aboutText: {
		margin: '10px 0',
	},
	profileImage: {
		display: 'inline-block',
		width: '300px',
		maxHeight: '400px',
		borderRadius: '3px',
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.aboutContainer}>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}> Company </Typography>
			</div>
			<div className={classes.aboutDataContainer}>
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
				<picture>
					<source
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
				</picture>
			</div>
		</div>
	);
};

export default About;
