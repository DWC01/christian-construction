import { makeStyles } from '@material-ui/core/styles';

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
				<div> Our Mission </div>
				<div className={classes.missionStatement}>
					Make your dream kitchen a reality.
				</div>
			</div>
		</div>
	);
};

export default Mission;
