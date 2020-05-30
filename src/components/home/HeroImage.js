import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	heroImage: {
		width: '100vw',
		maxHeight: '850px',
	},
}));

const HeroImage = () => {
	const classes = useStyles();

	return (
		<picture>
			<source
				type="image/webp"
				media="(min-width:430px)"
				className={classes.projectCoverImage}
				srcSet="/home/roundhill-hero.webp"
				alt="project-cover"
			/>
			<source
				type="image/webp"
				className={classes.projectCoverImage}
				srcSet="/home/roundhill-hero-mobile.webp"
				alt="project-cover"
			/>
			<img
				className={classes.heroImage}
				src="/home/roundhill-hero.jpg"
				alt="hero"
			/>
		</picture>
	);
};

export default HeroImage;
