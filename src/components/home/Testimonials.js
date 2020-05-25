/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Swiper from 'swiper';
import Testimonial from './Testimonial';

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
	testimonialHighlight: {
		fontWeight: '700',
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
	swiperSlide: {
		width: '400px !important',
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
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Kathleen D.">
							After interviewing dozens of contractors, we hired
							Christian Construction to do a major kitchen remodel
							and could not be more pleased with the outcome. We
							were incredibly impressed with Wayne Christian's
							references.
							<span className={classes.testimonialHighlight}>
								{' '}
								Every client we contacted sang his praises, and
								now we know why. The quality of his work is
								outstanding,{' '}
							</span>
							but what we appreciated most was the clarity of
							communication, the transparency of billing/costs and
							his proactive approach. Wayne's deep knowledge and
							professionalism helped us to avoid some mistakes
							that we had not considered and his "can-do" attitude
							helped us achieve our dream kitchen.
						</Testimonial>
					</div>
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Marianne Kearney Design">
							I’m an interior designer new to the East Bay Area so
							when it came time to hire a contractor to work on my
							home I looked for the best. I was referred by a
							colleague to Wayne of Christian Construction.
							<span className={classes.testimonialHighlight}>
								{' '}
								From the moment I met Wayne I was impressed.
								He’s down to earth, organized and professional.
								The work that he and his crew did on my home was
								done to my high standards.{' '}
							</span>
							I appreciate that he respected my design concept,
							asked questions for clarity and offered sound
							advice. His attention to detail and knowledge is
							impressive. I was particularly pleased with the
							labor intensive precision with which he and his team
							installed a geometric marble backsplash. From
							plumbing to building, Wayne's work is carried out
							with pride and skill. I highly recommend Wayne. I
							know I’ll be calling on him for future client
							projects.
						</Testimonial>
					</div>
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Lisa H.">
							We hired Christian Construction to renovate our
							kitchen and prepare floors for new hardwoods in the
							dining and living rooms.
							<span className={classes.testimonialHighlight}>
								{' '}
								I am completely thrilled with the final product.
								Our new kitchen is amazing.{' '}
							</span>
							Wayne delt with many challenges regarding rotting
							floor joists and uneven floors, his crew work
							diligently to repair this old house. He communicated
							with us every step of the way and helped us make
							finishing decisions. Every thing came out better
							then I could have imagined. I would hire Wayne and
							his crew again. Thanks again Wayne.
						</Testimonial>
					</div>
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Kate S.">
							Our kitchen is beautiful and our experience was
							positive.
							<span className={classes.testimonialHighlight}>
								{' '}
								We felt heard in our hopes for the aesthetic as
								well as the functional. Wayne Christian
								encouraged us to speak up when we had ideas or
								concerns.{' '}
							</span>
							They worked diligently and gave us just what we'd
							hoped for.
						</Testimonial>
					</div>
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Erin D.">
							<span className={classes.testimonialHighlight}>
								{' '}
								Christian Construction did a fantastic job
								remodeling our kitchen a couple of years ago.{' '}
							</span>
							When we discovered a damp carpet and wet wall in our
							family room we called Wayne and he showed up within
							hours. He made room in his schedule to meet with our
							insurance adjuster, provided emergency restoration
							services and in the end demoed much of the family
							room and all of the fireplace and repaired
							everything. Additionally, we discovered some bad
							siding on our house and he replaced that and
							repainted it. We can’t say enough about Wayne’s
							professionalism. He communicated well with us about
							the scope of the repair, did high quality work and
							showed up when he said he would. We were very happy
							with the end result of our unexpected project thanks
							to Wayne and Christian Construction. We recommend
							Christian Construction enthusiastically.
						</Testimonial>
					</div>
					<div className={`swiper-slide ${classes.swiperSlide}`}>
						<Testimonial clientName="Erin D.">
							We hired Christian Construction to remodel our guest
							house. They were a great team, did excellent work,
							were very accommodating and easy to work with. More
							specifically, communication was good, the jobsite
							was always well maintained and tidy, the crew
							arrived on time and when expected and the estimate
							and budget was accurate. When items such as more
							wall plugs and a change of window size occurred,
							Wayne explained the additional time required and the
							added cost as to not surprise us in the end. We
							would highly recommend Christian Construction and
							plan to use them on our main house bathroom remodels
							in the near future!
						</Testimonial>
					</div>
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
