import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	missionContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '300px',
	},
	missionTextContainer: {
		textAlign: 'center',
	},
	missionStatement: {
		marginTop: '15px',
		fontSize: '1.5rem',
	},
}));

const Mission = () => {
	const classes = useStyles();

	return (
		<div className={classes.missionContainer}>
			<div className={classes.missionTextContainer}>
				<Typography> Our Mission </Typography>
				<Typography className={classes.missionStatement}>
					Make your dream kitchen a reality.
				</Typography>
			</div>
		</div>
	);
};

export default Mission;
