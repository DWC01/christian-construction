import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	comingSoonContainer: {
		margin: '100px',
		textAlign: 'center',
	},
}));
const OurProcess = () => {
	const classes = useStyles();
	return (
		<div className={classes.comingSoonContainer}>
			<Typography>
				Website currently under construction, page coming soon!
			</Typography>
		</div>
	);
};

export default OurProcess;
