import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Swiper from 'swiper';
import TestimonialList from './TestimonialList';

const useStyles = makeStyles(theme => ({
	testimonnialsContainer: {
		maxWidth: '1200px',
		margin: '0 auto',
		position: 'relative',
	},
	header: {
		textAlign: 'center',
	},
	testimonials: {
		marginTop: '15px',
	},
	testimonnialCardsContainer: {
		margin: '30px',
	},
	swiperContainer: {
		margin: '30px auto',
		padding: '0',
		position: 'relative',
		overflow: 'hidden',
		listStyle: 'none',
		zIndex: '1',
	},
	swiperWrapper: {
		display: 'flex',
		paddingBottom: '10px',
	},
	swiperButton: {
		top: '250px',
		position: 'absolute',
		outline: 'none',
	},
	swiperButtonIcon: {
		fontSize: '2rem',
		cursor: 'pointer',
	},
	swiperButtonPrev: {
		left: '-8px',
		color: theme.palette.primary.main,
	},
	swiperButtonNext: {
		right: '-8px',
		color: theme.palette.primary.main,
	},
}));

const Testimonials = () => {
	const classes = useStyles();

	useEffect(() => {
		const swiper = new Swiper('.swiper-container', {
			init: false,

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			speed: 600,
			slidesPerView: 3,
			slidesPerGroup: 3,
		});

		swiper.init();
	});

	return (
		<div className={classes.testimonnialsContainer}>
			<div className={classes.header}>
				<Typography> What our clients have to say </Typography>
			</div>

			<div className={`swiper-container ${classes.swiperContainer}`}>
				<div className={`swiper-wrapper ${classes.swiperWrapper}`}>
					<TestimonialList />
				</div>

				<div
					className={`swiper-button-prev ${classes.swiperButton} ${classes.swiperButtonPrev}`}
				>
					<ArrowBackIosRoundedIcon
						className={classes.swiperButtonIcon}
					/>
				</div>
				<div
					className={`swiper-button-next ${classes.swiperButton} ${classes.swiperButtonNext}`}
				>
					<ArrowForwardIosRoundedIcon
						className={classes.swiperButtonIcon}
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
