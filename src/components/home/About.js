import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	aboutContainer: {
		height: '500px',
		maxWidth: '1200px',
		margin: '0 auto',
	},
	header: {
		textAlign: 'center',
	},
	aboutDataContainer: {
		marginTop: '30px',
		display: 'flex',
	},
	aboutTextContainer: {
		padding: '0 50px 0 0',
	},
	aboutText: {
		margin: '10px 0',
	},
	profileImage: {
		width: '400px',
		borderRadius: '3px',
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.aboutContainer}>
			<div className={classes.header}>
				<Typography> About </Typography>
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
						Wayne Christian graduated from California Polytechnic
						State University, San Luis Obispo, with a degree in
						Construction Management from the School of Architecture.
						He first started working as a Project Engineer on the 26
						story Hilton Hotel in San Francisco. After working as a
						Construction Coordinator, building Custom Homes in
						Blackhawk, he decided to start his own construction
						company specializing in the design and remodeling of
						kitchens and bathrooms. Christian Construction has been
						a licensed General Contract and in business for 22
						years.
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
				<img
					className={classes.profileImage}
					src="/home/profile-photo.jpg"
					alt="profile"
				/>
			</div>
		</div>
	);
};

export default About;
