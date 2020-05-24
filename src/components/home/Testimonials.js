import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	testimonnialsContainer: {},
	header: {
		textAlign: 'center',
	},
	testimonials: {
		marginTop: '15px',
	},
}));

const Testimonials = () => {
	const classes = useStyles();

	return (
		<div className={classes.testimonnialsContainer}>
			<div className={classes.header}>
				<Typography> What our clients have to say </Typography>
			</div>
			<div className={classes.testimonials}>Achiements</div>
		</div>
	);
};

export default Testimonials;
