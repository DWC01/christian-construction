import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(() => ({
	headerContainer: {
		textAlign: 'center',
	},
	projectCardContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '30px',
	},
}));

const Projects = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.headerContainer}>
				<div>Our Work</div>
			</div>
			<div className={classes.projectCardContainer}>
				<ProjectCard imgSrc="/home/roundhill-cover.jpg" />
				<ProjectCard imgSrc="/home/cohen-cover.jpg" />
				<ProjectCard imgSrc="/home/andrews-cover.jpg" />
			</div>
		</>
	);
};

export default Projects;
