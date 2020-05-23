import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
	projectCard: {
		width: '350px',
		height: '400px',
		margin: '0 30px',
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
	},
}));

const ProjectCard = ({ imgSrc }) => {
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
				<div className={classes.header}>Kitchen Remodel</div>
				<div className={classes.description}>
					Cedar white cabinets and white tile backsplash
				</div>
			</div>
		</Paper>
	);
};

ProjectCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
};

export default ProjectCard;
