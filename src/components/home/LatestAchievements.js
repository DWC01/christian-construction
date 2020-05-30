import { makeStyles } from '@material-ui/core/styles';
import HouzzBadge from './HouzzBadge';
import Section from './Section';

const useStyles = makeStyles(() => ({
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
		<Section header="Our Latest Achievements">
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
		</Section>
	);
};

export default LatestAcheivements;
