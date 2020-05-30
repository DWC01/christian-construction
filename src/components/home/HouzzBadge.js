import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
	badgeImg: {
		borderRadius: '2px',
		width: '90px',
		height: '90px',
		border: '0',
	},
	box: {
		width: '90px',
		height: '90px',
		borderRadius: '2px',
	},
}));

const HouzzBadge = ({ imgSrc, backupImgSrc, className }) => {
	const classes = useStyles();

	return (
		<Box className={`${className} ${classes.box}`} boxShadow={2}>
			<a href="https://www.houzz.com/pro/wayne3ck/christian-construction">
				<picture>
					<source
						type="image/webp"
						loading="lazy"
						className={classes.projectCoverImage}
						srcSet={imgSrc}
						alt="project-cover"
					/>
					<img
						loading="lazy"
						src={backupImgSrc}
						alt="Wayne Christian in Lafayette, CA on Houzz"
						className={classes.badgeImg}
					/>
				</picture>
			</a>
		</Box>
	);
};

HouzzBadge.defaultProps = {
	className: '',
};

HouzzBadge.propTypes = {
	className: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	backupImgSrc: PropTypes.string.isRequired,
};

export default HouzzBadge;
