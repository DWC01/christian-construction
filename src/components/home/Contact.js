import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	contactContainer: {
		height: '500px',
	},
	headerContainer: {
		textAlign: 'center',
	},
	header: {
		color: theme.palette.primary.main,
		fontSize: '1.6rem',
		marginBottom: '20px',
	},
	about: {
		textAlign: 'center',
		width: '450px',
		margin: '0 auto',
		marginBottom: '30px',
	},
	contactFormContainer: {
		border: `1px solid ${theme.palette.primary.main}`,
		width: '450px',
		height: '400px',
		margin: '0 auto 300px auto',
	},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<div className={classes.contactContainer}>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>
					Ready to get started?
				</Typography>
				<Typography className={classes.about}>
					Christian Construction has been proudly serving clients in
					the SF Bay Area for over 20 years! We'd love to hear from
					you and see how we can work together to build out your next
					dream project.
				</Typography>
				<div className={classes.contactFormContainer} />
			</div>
		</div>
	);
};

export default Contact;
