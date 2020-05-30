import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swiper from 'swiper';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import TestimonialList from './TestimonialList';
import Section from './Section';

const useStyles = makeStyles(theme => ({
	section: {
		margin: '0 auto 40px auto',
	},
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
		margin: '0 auto',
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
	testimonialCount: {
		textAlign: 'center',
		color: theme.palette.primary.light,
	},
	'@media (max-width: 1260px)': {
		testimonnialsContainer: {
			maxWidth: '800px',
		},
	},
	'@media (max-width: 850px)': {
		testimonnialsContainer: {
			maxWidth: '400px',
		},
	},
	'@media (max-width: 430px)': {
		testimonnialsContainer: {
			width: '350px',
		},
	},
	'@media (max-width: 374px)': {
		testimonnialsContainer: {
			width: '300px',
		},
	},
}));

const Testimonials = () => {
	const classes = useStyles();
	const [count, setCount] = useState(1);
	const [swiper, setSwiper] = useState(null);
	const [totalCount, setTotalCount] = useState(10);

	const handleNextClick = () => {
		const updateCount = count === totalCount ? totalCount : count + 1;
		setCount(updateCount);
	};

	const handlePrevClick = () => {
		const updateCount = count === 1 ? 1 : count - 1;
		setCount(updateCount);
	};

	useEffect(() => {
		const windowWidth = window.innerWidth;

		if (windowWidth <= 1260) {
			setTotalCount(14);
		}

		if (windowWidth <= 850) {
			setTotalCount(28);
		}

		if (!swiper) {
			const swiperInstance = new Swiper('.swiper-container', {
				init: false,

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				speed: 600,
				slidesPerView: 1,
				slidesPerGroup: 1,

				breakpoints: {
					850: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					1260: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				},
			});

			swiperInstance.init();

			setSwiper(swiperInstance);
		}
	}, [swiper]);

	return (
		<Section
			header="What our clients have to say"
			sectionHeaderClass={classes.section}
		>
			<div className={classes.testimonnialsContainer}>
				<div className={`swiper-container ${classes.swiperContainer}`}>
					<div className={`swiper-wrapper ${classes.swiperWrapper}`}>
						<TestimonialList />
					</div>

					<div
						onClick={handlePrevClick}
						onKeyDown={() => {}}
						role="button"
						tabIndex="0"
						className={`swiper-button-prev ${classes.swiperButton} ${classes.swiperButtonPrev}`}
					>
						<ArrowBackIosRoundedIcon
							className={classes.swiperButtonIcon}
						/>
					</div>
					<div
						onClick={handleNextClick}
						onKeyDown={() => {}}
						role="button"
						tabIndex="0"
						className={`swiper-button-next ${classes.swiperButton} ${classes.swiperButtonNext}`}
					>
						<ArrowForwardIosRoundedIcon
							className={classes.swiperButtonIcon}
						/>
					</div>
					<div className={classes.testimonialCount}>
						{count}/{totalCount}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Testimonials;
