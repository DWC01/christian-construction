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
					imgSrc="/portfolio/images/latchfords/latchford-cabinet.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-cabinet.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-long-backside.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-long-backside.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumn}>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-long-fontside.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-long-fontside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-oven.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-oven.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumnMobile}>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-cabinet.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-cabinet.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-long-fontside.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-long-fontside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-long-backside.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-long-backside.jpg"
				/>
				<PortfolioImage
					imgSrc="/portfolio/images/latchfords/latchford-oven.webp"
					backupImgSrc="/portfolio/images/latchfords/latchford-oven.jpg"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
