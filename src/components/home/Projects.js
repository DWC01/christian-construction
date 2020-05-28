import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(() => ({
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
	projectCardContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '50px',
		flexWrap: 'wrap',
	},
	'@media (max-width: 1284px)': {
		projectCardContainer: {
			flexDirection: 'row-reverse',
		},
		projectCard: {
			marginBottom: '40px',
			'&:last-child': {
				display: 'none',
			},
		},
	},
	'@media (max-width: 1024px)': {
		projectCardContainer: {
			flexWrap: 'wrap-reverse',
		},
		projectCard: {
			marginBottom: '40px',
			'&:last-child': {
				display: 'none',
			},
		},
	},
}));

const Projects = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>Our Work</Typography>
			</div>
			<div className={classes.projectCardContainer}>
				<ProjectCard
					className={classes.projectCard}
					imgSrc="/home/latchford-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Lafayette, CA"
				/>
				<ProjectCard
					className={classes.projectCard}
					imgSrc="/home/roundhill-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Alamo, CA"
				/>
				<ProjectCard
					className={classes.projectCard}
					imgSrc="/home/andrews-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Alamo, CA"
				/>
			</div>
		</>
	);
};

export default Projects;
