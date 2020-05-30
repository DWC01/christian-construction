import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

const useStyles = makeStyles(() => ({
	missionContentContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '50px',
	},
	missionStatement: {
		marginTop: '15px',
		fontSize: '1.5rem',
	},
}));

const Mission = () => {
	const classes = useStyles();

	return (
		<Section header="Our Mission">
			<div className={classes.missionContentContainer}>
				<Typography className={classes.missionStatement}>
					Make your dream kitchen a reality.
				</Typography>
			</div>
		</Section>
	);
};

export default Mission;
