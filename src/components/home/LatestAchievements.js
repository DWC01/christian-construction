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
	achievementsConatiner: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '30px',
	},
	achievements: {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '600px',
		marginBottom: '30px',
	},
}));

const LatestAcheivements = () => {
	const classes = useStyles();

	return (
		<div className={classes.latestAchievementsContainer}>
			<div className={classes.header}>
				<Typography> Our Latest Achievements </Typography>
			</div>
			<div className={classes.achievementsConatiner}>
				<div className={classes.achievements}>
					<HouzzBadge
						imgSrc="/home/houzz/houzz500SavesBadge.png"
						backupImgSrc="/home/houzz/houzz500SavesBadge.png"
					/>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2020ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2020ServiceBadge.png"
					/>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2019ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2019ServiceBadge.png"
					/>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2018ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2018ServiceBadge.png"
					/>
				</div>
				<div className={classes.achievements}>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2016ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2016ServiceBadge.png"
					/>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2015ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2015ServiceBadge.png"
					/>
					<HouzzBadge
						imgSrc="/home/houzz/houzz2014ServiceBadge.webp"
						backupImgSrc="/home/houzz/houzz2014ServiceBadge.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default LatestAcheivements;
