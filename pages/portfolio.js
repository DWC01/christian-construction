import { makeStyles } from '@material-ui/core/styles';
import PortfolioCover from '../src/components/portfolio/PortfolioCover';

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
				<PortfolioCover
					linkPath="/portfolio/alamo"
					projectName="Alamo"
					imgSrc="/portfolio/covers/alamo-kitchen-hero-close.webp"
					backupImgSrc="/portfolio/covers/alamo-kitchen-hero-close.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/latchfords"
					projectName="Latchfords"
					imgSrc="/portfolio/covers/latchford-long-frontside.webp"
					backupImgSrc="/portfolio/covers/latchford-long-frontside.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Farmhouse"
					imgSrc="/portfolio/covers/farmhouse.webp"
					backupImgSrc="/portfolio/covers/farmhouse.jpg"
				/>
			</div>
			<div className={classes.porfoioCoversColumn}>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Roundhill"
					imgSrc="/portfolio/covers/roundhill.webp"
					backupImgSrc="/portfolio/covers/roundhill.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Kohler"
					imgSrc="/portfolio/covers/kohler.webp"
					backupImgSrc="/portfolio/covers/kohler.jpg"
				/>
				{/* <PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Cohen"
					imgSrc="/portfolio/covers/cohen.webp"
					backupImgSrc="/portfolio/covers/cohen.jpg"
				/> */}
			</div>
			<div className={classes.porfoioCoversColumnMobile}>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Roundhill"
					imgSrc="/portfolio/covers/roundhill.webp"
					backupImgSrc="/portfolio/covers/roundhill.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Latchfords"
					imgSrc="/portfolio/covers/latchford-long-frontside.webp"
					backupImgSrc="/portfolio/covers/latchford-long-frontside.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Kohler"
					imgSrc="/portfolio/covers/kohler.webp"
					backupImgSrc="/portfolio/covers/kohler.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Cohen"
					imgSrc="/portfolio/covers/cohen.webp"
					backupImgSrc="/portfolio/covers/cohen.jpg"
				/>
				<PortfolioCover
					linkPath="/portfolio/roundhill"
					projectName="Farmhouse"
					imgSrc="/portfolio/covers/farmhouse.webp"
					backupImgSrc="/portfolio/covers/farmhouse.jpg"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
