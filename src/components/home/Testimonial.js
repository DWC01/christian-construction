import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles(theme => ({
	testimonialWrapper: {
		display: 'flex',
		width: '400px',
		justifyContent: 'center',
		alignItems: 'center',
		height: '650px',
	},
	testimonialContainer: {
		width: '350px',
		height: '600px',
		overflow: 'hidden',
		position: 'relative',
	},
	testimonial: {
		padding: '25px',
		maxHeight: '400px',
		overflow: 'hidden',
	},
	testimonialInfo: {
		position: 'absolute',
		bottom: '30px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	clientName: {
		textAlign: 'center',
	},
	ratingsConatiner: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '12px',
	},
	rating: {
		fill: theme.palette.primary.main,
	},
}));

const Testimonial = ({ children, clientName }) => {
	const classes = useStyles();

	return (
		<div className={classes.testimonialWrapper}>
			<Paper elevation={2} className={classes.testimonialContainer}>
				<Typography className={classes.testimonial}>
					{children}
				</Typography>
				<div className={classes.testimonialInfo}>
					<Typography className={classes.clientName}>
						{clientName}
					</Typography>
					<div className={classes.ratingsConatiner}>
						<StarRoundedIcon className={classes.rating} />
						<StarRoundedIcon className={classes.rating} />
						<StarRoundedIcon className={classes.rating} />
						<StarRoundedIcon className={classes.rating} />
						<StarRoundedIcon className={classes.rating} />
						<StarRoundedIcon className={classes.rating} />
					</div>
				</div>
			</Paper>
		</div>
	);
};

Testimonial.propTypes = {
	children: PropTypes.node.isRequired,
	clientName: PropTypes.string.isRequired,
};

export default Testimonial;
