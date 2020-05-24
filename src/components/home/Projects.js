import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
				<Typography>Our Work</Typography>
			</div>
			<div className={classes.projectCardContainer}>
				<ProjectCard
					imgSrc="/home/roundhill-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Alamo"
				/>
				<ProjectCard
					imgSrc="/home/latchford-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Lafayette"
				/>
				<ProjectCard
					imgSrc="/home/andrews-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Alamo"
				/>
			</div>
		</>
	);
};

export default Projects;
