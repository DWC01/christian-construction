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
		porfoioCoversContainer: {
			padding: '0 5px',
		},
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
					imgSrc="/portfolio/images/roundhill/roundhill-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-range-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-range-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-island-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-island-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-fridge-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-fridge-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-dining-room.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-dining-room.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumn}>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-island-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-island-outside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-side-island-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-side-island-outside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-backwall.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-backwall.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-fridge-angle.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-fridge-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-lower-cabinet-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-lower-cabinet-outside.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumnMobile}>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-island-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-island-outside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-range-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-range-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-side-island-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-side-island-outside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-island-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-island-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-backwall.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-backwall.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-fridge-hero.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-fridge-hero.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-fridge-angle.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-fridge-angle.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-dining-room.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-dining-room.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/roundhill/roundhill-lower-cabinet-outside.webp"
					backupImgSrc="/portfolio/images/roundhill/roundhill-lower-cabinet-outside.jpg"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
