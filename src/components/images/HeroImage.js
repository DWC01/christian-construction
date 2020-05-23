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
		<img
			className={classes.heroImage}
			src="/roundhill/roundhill-hero.jpg"
			alt="hero"
		/>
	);
};

export default HeroImage;
