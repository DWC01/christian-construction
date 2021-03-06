import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Section from './Section';

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
			'&:last-child': {
				display: 'none',
			},
		},
	},
	'@media (max-width: 870px)': {
		projectCardContainer: {
			flexWrap: 'wrap-reverse',
		},
		projectCard: {
			'&:nth-child(2)': {
				marginBottom: '40px',
			},
			'&:last-child': {
				display: 'none',
			},
		},
	},
}));

const Projects = () => {
	const classes = useStyles();

	return (
		<Section header="Our Work">
			<div className={classes.projectCardContainer}>
				<ProjectCard
					linkPath="/portfolio/alamo"
					className={classes.projectCard}
					imgSrc="/home/alamo-cover.webp"
					backupImgSrc="/home/alamo-cover.jpg"
					description="Cedar white cabinets and white tile backsplash"
					title="Kitchen Remodel"
					location="Alamo, CA"
				/>
				<ProjectCard
					linkPath="/portfolio/roundhill"
					className={classes.projectCard}
					imgSrc="/home/roundhill-cover.webp"
					backupImgSrc="/home/roundhill-cover.jpg"
					description="Shaker style white cabinets and white quartz countertops"
					title="Kitchen Remodel"
					location="Alamo, CA"
				/>
				<ProjectCard
					linkPath="/portfolio/latchfords"
					className={classes.projectCard}
					imgSrc="/home/latchford-cover.webp"
					backupImgSrc="/home/latchford-cover.jpg"
					description="Honey stained shaker style cabinets and granite countertops"
					title="Kitchen Remodel"
					location="Lafayette, CA"
				/>
			</div>
		</Section>
	);
};

export default Projects;
