import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Link from '../global/Link';

const useStyles = makeStyles(theme => ({
	projectCard: {
		width: '350px',
		height: '400px',
		margin: '0 30px',
		position: 'relative',
		transition: 'all .1s ease',
		'&:hover': {
			boxShadow: `${theme.shadows['4']} !important`,
		},
	},
	projectCardRadius: {
		borderRadius: '2px',
	},
	projectCoverImage: {
		width: '100%',
		borderTopLeftRadius: '2px',
		borderTopRightRadius: '2px',
	},
	descriptionContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	header: {
		margin: '10px',
		fontSize: '1.1rem',
		color: theme.palette.text.primary,
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
	link: {
		'&:hover': {
			textDecoration: 'none',
		},
	},
	'@media (max-width: 400px)': {
		projectCard: {
			margin: '0 10px',
		},
	},
	'@media (max-width: 330px)': {
		projectCard: {
			height: '375px',
		},
	},
}));

const ProjectCard = ({
	imgSrc,
	title,
	location,
	className,
	description,
	backupImgSrc,
}) => {
	const classes = useStyles();

	return (
		<Paper
			className={className}
			classes={{
				root: classes.projectCard,
				rounded: classes.projectCardRadius,
			}}
			elevation={2}
		>
			<Link href="/" className={classes.link}>
				<picture>
					<source
						loading="lazy"
						className={classes.projectCoverImage}
						srcSet={imgSrc}
						alt="project-cover"
					/>
					<img
						loading="lazy"
						className={classes.projectCoverImage}
						src={backupImgSrc}
						alt="project-cover"
					/>
				</picture>

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
			</Link>
		</Paper>
	);
};

ProjectCard.defaultProps = {
	className: '',
};

ProjectCard.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	backupImgSrc: PropTypes.string.isRequired,
};

export default ProjectCard;
