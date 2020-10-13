import { makeStyles } from '@material-ui/core/styles';
import Contact from '../src/components/home/Contact';

const useStyles = makeStyles(() => ({
	contactContainer: {
		margin: '50px 0 0 0',
	},
}));

const ContactPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.contactContainer}>
			<Contact />
		</div>
	);
};

export default ContactPage;
