import nodemailer from 'nodemailer';
import to from 'await-to-js';

const config = {
	service: 'Gmail',
	type: 'OAuth2',
	user: process.env.MAILER_USER,
	clientId: process.env.MAILER_CLIENT_ID,
	clientSecret: process.env.MAILER_CLIENT_SECRET,
	refreshToken: process.env.MAILER_REFRESH_TOKEN,
};

const smtpTransport = nodemailer.createTransport({
	service: config.service,
	auth: {
		type: config.type,
		user: config.user,
		clientId: config.clientId,
		clientSecret: config.clientSecret,
		refreshToken: config.refreshToken,
	},
});

function sendLead({ name, email, message }) {
	const mailOptions = {
		from: config.user,
		to: config.user,
		subject: `Inbound Lead! ${name}-${email}`,
		text: `
			Name: ${name}
			Email: ${email}
			Message: ${message}
		`,
	};

	return new Promise((resolve, reject) => {
		smtpTransport.sendMail(mailOptions, (error, info) => {
			if (error) {
				reject(error);
			} else {
				resolve(info);
			}
		});
	});
}

const sendMail = async (req, res) => {
	const { name, email, message } = req.body;

	// Check if fields are all filled
	if (name === '' || email === '' || message === '') {
		res.status(403).send('');
		return;
	}

	const [mailerResponseError, mailerResponse] = await to(
		sendLead({ name, email, message }),
	);

	if (mailerResponseError) {
		throw new Error(mailerResponseError);
	}

	res.status = 200;
	res.send(mailerResponse);
};

export default sendMail;
