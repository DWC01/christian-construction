import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HouzzBadge from './HouzzBadge';

const useStyles = makeStyles(() => ({
	latestAchievementsContainer: {
		maxWidth: '1200px',
		margin: '0 auto',
	},
	header: {
		textAlign: 'center',
	},
	achievements: {
		marginTop: '30px',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
}));

const LatestAcheivements = () => {
	const classes = useStyles();

	return (
		<div className={classes.latestAchievementsContainer}>
			<div className={classes.header}>
				<Typography> Latest Achievements </Typography>
			</div>
			<div className={classes.achievements}>
				<HouzzBadge code="31_9" />
				<HouzzBadge code="49_8" />
				<HouzzBadge code="47_8" />
				<HouzzBadge code="44_8" />
				<HouzzBadge code="44_8" />
				<HouzzBadge code="41_8" />
				<HouzzBadge code="22_8" />
				<HouzzBadge code="16_8" />
				<HouzzBadge code="13_8" />
			</div>
		</div>
	);
};

export default LatestAcheivements;
