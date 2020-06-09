import to from 'await-to-js';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import emailRegex from '../../constants/emailRegex';
import sendContactLeadMail from '../api/contantLead';

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
	submitButtonContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '30px',
	},
	errorContainer: {
		margin: '0px 5px 5px 15px',
		color: theme.palette.error.main,
	},
	button: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	messageSentContainer: {
		textAlign: 'center',
		fontSize: '1.5rem',
		color: theme.palette.primary.main,
	},
	messageSentMessageContainer: {
		marginBottom: '10px',
		fontSize: '1.3rem',
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
	const { register, handleSubmit, errors } = useForm();
	const [sendingMessage, setSendingMessage] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const onSubmit = async ({ name, email, message }) => {
		setSendingMessage(true);

		const [error, response] = await to(
			sendContactLeadMail({
				name,
				email,
				message,
			}),
		);

		if (error) {
			console.error(error);
		}

		if (response) {
			setMessageSent(true);
		}
	};

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
				{messageSent ? (
					<div className={classes.messageSentContainer}>
						<Typography
							className={classes.messageSentMessageContainer}
						>
							Message sent!
						</Typography>
						<Typography
							className={classes.messageSentMessageContainer}
						>
							We'll be in contact within 24 hours.
						</Typography>
						<Typography
							className={classes.messageSentMessageContainer}
						>
							Want to chat sooner? Give us a call now at
							925-639-4567.
						</Typography>
					</div>
				) : (
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div>
							<TextField
								name="name"
								inputRef={register({ required: true })}
								error={!!errors.name}
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
							{errors.name && (
								<div className={classes.errorContainer}>
									Name is required
								</div>
							)}
						</div>
						<div>
							<TextField
								name="email"
								inputRef={register({
									required: true,
									pattern: emailRegex,
								})}
								error={!!errors.email}
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
							{errors.email && (
								<div className={classes.errorContainer}>
									Valid email required
								</div>
							)}
						</div>
						<div>
							<TextField
								name="message"
								inputRef={register({ required: true })}
								error={!!errors.message}
								id="contact-message"
								className={classes.textField}
								label="Message"
								style={{ margin: 8 }}
								placeholder="I would love to connect with Christian Construction about an upcoming renovation.."
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
							{errors.message && (
								<div className={classes.errorContainer}>
									Message is required
								</div>
							)}
						</div>
						<div className={classes.submitButtonContainer}>
							{sendingMessage ? (
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className={classes.button}
									fullWidth
									disabled
								>
									Sending...
								</Button>
							) : (
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className={classes.button}
									fullWidth
								>
									Send Message
								</Button>
							)}
						</div>
					</form>
				)}
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
							(925) 639-4567
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
