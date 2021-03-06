import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	portfolioCoverContainer: {
		position: 'relative',
		display: 'inline-block',
		padding: '5px',
		overflow: 'hidden',
		cursor: 'pointer',
	},
	portfolioCoverImage: {
		maxWidth: '100%',
		justifyContent: 'center',
	},
	linkBoxText: {
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
		color: '#fff',
		fontWeight: '500',
		fontSize: '1rem',
		'&:focus': {
			color: '#fff',
		},
	},
	'@media (max-width: 750px)': {
		linkBoxText: {
			fontWeight: '400',
		},
	},
}));

const PortfolioCover = ({ className, imgSrc, backupImgSrc }) => {
	const classes = useStyles();

	return (
		<div className={`${className} ${classes.portfolioCoverContainer}`}>
			<picture>
				<source
					type="image/webp"
					media="(min-width:430px)"
					className={classes.portfolioCoverImage}
					srcSet={imgSrc}
					alt="portfolio-img"
				/>
				<source
					type="image/webp"
					className={classes.portfolioCoverImage}
					srcSet={imgSrc}
					alt="portfolio-img"
				/>
				<img
					className={classes.portfolioCoverImage}
					src={backupImgSrc}
					alt="portfolio-img"
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
	backupImgSrc: PropTypes.string.isRequired,
};

export default PortfolioCover;
