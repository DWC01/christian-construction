import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	projectCard: {
		width: '350px',
		height: '400px',
		margin: '0 30px',
		position: 'relative',
	},
	projectCardRadius: {
		borderRadius: '2px',
	},
	projectCoverImage: {
		width: '350px',
		borderRadius: '2px',
	},
	descriptionContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	header: {
		margin: '10px',
		fontSize: '1.1rem',
	},
	description: {
		padding: '0 20px',
		textAlign: 'center',
		color: '#777',
		fontSize: '.95rem',
	},
	locationContainer: {
		position: 'absolute',
		left: '10px',
		bottom: '16px',
	},
	locationData: {
		display: 'flex',
		alignItems: 'center',
	},
	location: {
		fontSize: '.95rem',
		color: theme.palette.primary.light,
	},
	locationIcon: {
		fill: theme.palette.primary.light,
		marginRight: '5px',
		position: 'relative',
		top: '-1px',
	},
	arrowContainer: {
		position: 'absolute',
		right: '10px',
		bottom: '10px',
	},
	arrowIcon: {
		fill: theme.palette.primary.light,
	},
}));

const ProjectCard = ({ imgSrc, title, description, location }) => {
	const classes = useStyles();

	return (
		<Paper
			classes={{
				root: classes.projectCard,
				rounded: classes.projectCardRadius,
			}}
			elevation={2}
		>
			<img
				className={classes.projectCoverImage}
				src={imgSrc}
				alt="project-cover"
			/>
			<div className={classes.descriptionContainer}>
				<Typography className={classes.header}>{title}</Typography>
				<Typography className={classes.description}>
					{description}
				</Typography>
			</div>
			<div className={classes.locationContainer}>
				<div className={classes.locationData}>
					<LocationOnIcon className={classes.locationIcon} />
					<Typography className={classes.location}>
						{location}
					</Typography>
				</div>
			</div>
			<div className={classes.arrowContainer}>
				<ArrowForwardIosRoundedIcon className={classes.arrowIcon} />
			</div>
		</Paper>
	);
};

ProjectCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

export default ProjectCard;
