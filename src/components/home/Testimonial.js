import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles(theme => ({
	testimonialWrapper: {
		display: 'flex',
		width: '400px',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '550px',
	},
	testimonialContainer: {
		width: '350px',
		minHeight: '500px',
		overflow: 'hidden',
		position: 'relative',
	},
	testimonial: {
		padding: '25px',
		minHeight: '390px',
		maxHeight: '390px',
		overflow: 'hidden',
		marginBottom: '90px',
		borderBottom: '1px solid #eee',
		transition: 'all 1s ease',
	},
	testimonialExpanded: {
		maxHeight: '1230px',
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
	quote: {
		position: 'absolute',
		transform: 'rotate(180deg)',
		fill: theme.palette.primary.light,
		top: '-30px',
		fontSize: '7rem',
		opacity: '.12',
	},
	expandIcon: {
		position: 'relative',
		top: '-84px',
		left: '317px',
		cursor: 'pointer',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandIconOpen: {
		transform: 'rotate(180deg)',
	},
	'@media (max-width: 430px)': {
		testimonialWrapper: {
			width: '350px',
		},
		testimonialContainer: {
			width: '300px',
		},
		expandIcon: {
			left: '270px',
		},
	},
	'@media (max-width: 374px)': {
		testimonialWrapper: {
			width: '300px',
		},
		testimonialContainer: {
			width: '280px',
		},
		expandIcon: {
			left: '250px',
		},
	},
}));

const Testimonial = ({ children, clientName }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={classes.testimonialWrapper}>
			<Paper elevation={2} className={classes.testimonialContainer}>
				<FormatQuoteIcon className={classes.quote} />
				<Typography
					className={`${classes.testimonial} ${
						expanded ? classes.testimonialExpanded : ''
					}`}
				>
					{children}
				</Typography>
				<ExpandMoreIcon
					className={`${classes.expandIcon} ${
						expanded ? classes.expandIconOpen : ''
					}`}
					onClick={handleExpandClick}
					onKeyUp={() => {}}
					aria-label="show more"
				>
					Read More
				</ExpandMoreIcon>
				<div className={classes.testimonialInfo}>
					<Typography className={classes.clientName}>
						{clientName}
					</Typography>
					<div className={classes.ratingsConatiner}>
						<StarIcon className={classes.rating} />
						<StarIcon className={classes.rating} />
						<StarIcon className={classes.rating} />
						<StarIcon className={classes.rating} />
						<StarIcon className={classes.rating} />
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
