import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '../global/Link';

const useStyles = makeStyles(theme => ({
	portfolioCoverContainer: {
		position: 'relative',
		maxWidth: '50%',
		display: 'inline-block',
		padding: '5px',
	},
	portfolioCoverImage: {
		maxWidth: '100%',
		justifyContent: 'center',
	},
	linkBox: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		border: '2px solid #fff',
		transform: 'translate(-50%, -50%)',
		padding: '10px 20px',
		'&:hover': {
			color: '#fff',
			textDecoration: 'none',
			backgroundColor: 'rgba(250, 250, 250, .5)',
		},
		'&:focus': {
			color: '#fff',
		},
	},
	linkBoxText: {
		color: '#fff',
		fontWeight: '400',
		fontSize: '1.3rem',
		'&:focus': {
			color: '#fff',
		},
	},
}));

const PortfolioCover = ({ className, projectName, imgSrc, backupImgSrc }) => {
	const classes = useStyles();

	return (
		<div className={`${className} ${classes.portfolioCoverContainer}`}>
			<Link href="/" className={classes.linkBox}>
				<Typography className={classes.linkBoxText}>
					{projectName}
				</Typography>
			</Link>
			<picture>
				<source
					type="image/webp"
					media="(min-width:430px)"
					className={classes.portfolioCoverImage}
					srcSet={imgSrc}
					alt="portfolio-cover"
				/>
				<source
					type="image/webp"
					className={classes.portfolioCoverImage}
					srcSet={imgSrc}
					alt="portfolio-cover"
				/>
				<img
					className={classes.portfolioCoverImage}
					src={backupImgSrc}
					alt="portfolio-cover"
				/>
			</picture>
		</div>
	);
};

PortfolioCover.defaultProps = {
	className: '',
};

PortfolioCover.propTypes = {
	className: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	projectName: PropTypes.string.isRequired,
	backupImgSrc: PropTypes.string.isRequired,
};

export default PortfolioCover;
