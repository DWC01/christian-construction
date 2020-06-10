import { makeStyles } from '@material-ui/core/styles';
import PortfolioCover from '../src/components/portfolio/PortfolioCover';

const useStyles = makeStyles(() => ({
	porfoioCoversContainer: {
		margin: '50px auto',
		padding: '0 50px',
	},
}));

const Portfolio = () => {
	const classes = useStyles();

	return (
		<div className={classes.porfoioCoversContainer}>
			<PortfolioCover
				projectName="Roundhill"
				imgSrc="/portfolio/covers/roundhill.webp"
				backupImgSrc="/portfolio/covers/roundhill.jpg"
			/>
			<PortfolioCover
				projectName="Latchfords"
				imgSrc="/portfolio/covers/latchford-long-frontside.webp"
				backupImgSrc="/portfolio/covers/latchford-long-frontside.jpg"
			/>
		</div>
	);
};

export default Portfolio;
