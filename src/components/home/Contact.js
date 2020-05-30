import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const useStyles = makeStyles(theme => ({
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
		maxWidth: '550px',
		margin: '0 auto',
		marginBottom: '30px',
	},
	contactFormContainer: {
		maxWidth: '500px',
		padding: '20px',
		margin: '0 auto 100px auto',
	},
	contactInfoContainer: {
		marginTop: '30px',
	},
	contactInfoHeader: {
		margin: '30px 0',
	},
	contactInfo: {
		display: 'flex',
		margin: '0 0 20px 0',
		color: '#666',
		overflowWrap: 'anywhere',
	},
	contactInfoIcon: {
		marginRight: '10px',
		color: '#666',
	},
	multilinedInput: {
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: `${theme.palette.primary.main} !important`,
		},
	},
	'@media (max-width: 430px)': {
		multilinedInput: {
			fontSize: '16px',
			'&:hover .MuiOutlinedInput-notchedOutline': {
				borderColor: `${theme.palette.primary.main} !important`,
			},
		},
	},
	'@media (max-width: 390px)': {
		contactInfoText: {
			fontSize: '.9rem',
		},
	},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>
					Ready to get started?
				</Typography>
				<Typography className={classes.about}>
					Christian Construction has been proudly serving clients in
					the SF Bay Area for over 30 years! We'd love to hear from
					you and see how we can work together to build out your next
					dream project.
				</Typography>
			</div>
			<Paper elevation={3} className={classes.contactFormContainer}>
				<form className={classes.root} noValidate autoComplete="off">
					<div>
						<TextField
							id="contact-name"
							className={classes.textField}
							label="Name"
							style={{ margin: 8 }}
							placeholder="Lisa Smith"
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								classes: {
									root: classes.multilinedInput,
								},
							}}
							variant="outlined"
						/>
					</div>
					<div>
						<TextField
							id="contact-email"
							className={classes.textField}
							label="Email"
							style={{ margin: 8 }}
							placeholder="lisa.smith@gmail.com"
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								classes: {
									root: classes.multilinedInput,
								},
							}}
							variant="outlined"
						/>
					</div>
					<div>
						<TextField
							id="contact-message"
							className={classes.textField}
							label="Message"
							style={{ margin: 8 }}
							placeholder="I would love to connect about an upcoming kitchen remodel.."
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								classes: {
									root: classes.multilinedInput,
								},
							}}
							variant="outlined"
							multiline
							rows={4}
						/>
					</div>
				</form>
				<div className={classes.contactInfoContainer}>
					<Divider />
					<div className={classes.contactInfoHeader}>
						<Typography>Conact Information</Typography>
					</div>
					<div className={classes.contactInfo}>
						<LocationOnIcon className={classes.contactInfoIcon} />
						<div>
							<Typography className={classes.contactInfoText}>
								26 Beaumont Ct.
							</Typography>
							<Typography className={classes.contactInfoText}>
								Lafayette, CA, 94549
							</Typography>
						</div>
					</div>
					<div className={classes.contactInfo}>
						<CallRoundedIcon className={classes.contactInfoIcon} />
						<Typography className={classes.contactInfoText}>
							(925) 639-9635
						</Typography>
					</div>
					<div className={classes.contactInfo}>
						<MailOutlineRoundedIcon
							className={classes.contactInfoIcon}
						/>
						<Typography className={classes.contactInfoText}>
							wayne@christianconstruction.com
						</Typography>
					</div>
				</div>
			</Paper>
		</>
	);
};

export default Contact;
