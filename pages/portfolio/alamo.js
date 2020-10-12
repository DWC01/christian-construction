import { makeStyles } from '@material-ui/core/styles';
import PortfolioImage from '../../src/components/portfolio/PortfolioImage';

const useStyles = makeStyles(() => ({
	porfoioCoversContainer: {
		margin: '50px auto',
		padding: '0 50px',
		display: 'flex',
	},
	porfoioCoversColumn: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '50%',
	},
	porfoioCoversColumnMobile: {
		display: 'none',
	},
	'@media (max-width: 750px)': {
		porfoioCoversColumn: {
			display: 'none',
		},
		porfoioCoversColumnMobile: {
			display: 'flex',
			flexDirection: 'column',
		},
	},
}));

const Portfolio = () => {
	const classes = useStyles();

	return (
		<div className={classes.porfoioCoversContainer}>
			<div className={classes.porfoioCoversColumn}>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-hero.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-angle.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-long-view.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-long-view.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-front-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-front-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-hero-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-hero-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-front-angle.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-front-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-island-close-up.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-island-close-up.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumn}>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-long-view-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-long-view-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-nook.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-nook.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-drawer-close-up.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-drawer-close-up.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-pullout-drawer.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-pullout-drawer.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-pantry.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-pantry.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumnMobile}>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-hero.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-long-view-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-long-view-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-angle.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-nook.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-nook.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-long-view.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-long-view.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-drawer-close-up.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-drawer-close-up.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-front-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-front-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-pullout-drawer.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-pullout-drawer.jpg"
				/>

				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-hero.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-pantry.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-pantry.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-hero-close.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-hero-close.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-kitchen-front-angle.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-kitchen-front-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/alamo/alamo-island-close-up.webp"
					backupImgSrc="/portfolio/images/alamo/alamo-island-close-up.jpg"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
