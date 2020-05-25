import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
	testimonialWrapper: {
		display: 'flex',
		width: '400px',
		justifyContent: 'center',
		alignItems: 'center',
		height: '430px',
	},
	testimonialContainer: {
		width: '350px',
		height: '380px',
		overflow: 'hidden',
	},
	testimonial: {
		padding: '25px',
	},
	clientName: {
		textAlign: 'center',
		marginTop: '25px',
	},
	rating: {
		marginTop: '25px',
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
				<Typography className={classes.clientName}>
					{clientName}
				</Typography>
				<div className={classes.rating}>^^^^^</div>
			</Paper>
		</div>
	);
};

Testimonial.propTypes = {
	children: PropTypes.array.isRequired,
	clientName: PropTypes.string.isRequired,
};

export default Testimonial;
