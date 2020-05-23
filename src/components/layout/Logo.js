import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const lineIndent = '6px';
const lineThickness = '1px';

const useStyles = makeStyles(theme => ({
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cssLogoContainer: {
		position: 'relative',
		width: '70px',
		height: '60px',
		margin: '0 5px',
	},
	baseLineCss: {
		position: 'absolute',
		backgroundColor: theme.palette.primary.main,
		borderRadius: '2px',
	},
	hoizontalLineBase: {
		width: '100%',
		height: lineThickness,
	},
	verticleLineBase: {
		width: lineThickness,
		height: '100%',
	},
	bottomLine: {
		bottom: lineIndent,
	},
	topLine: {
		top: lineIndent,
	},
	leftLine: {
		left: lineIndent,
	},
	rightLine: {
		right: lineIndent,
	},
	ccContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '300',
	},
	cc: {
		fontSize: '2.35rem',
		fontWeight: '200',
		transform: 'scaleY(1.25)',
		color: theme.palette.primary.main,
	},
	logoText: {
		color: theme.palette.primary.main,
		fontSize: '2rem',
		fontWeight: '300',
	},
}));

const Logo = () => {
	const classes = useStyles();

	return (
		<div className={classes.logoContainer}>
			<div className={classes.cssLogoContainer}>
				<div
					className={`${classes.baseLineCss} ${classes.hoizontalLineBase} ${classes.topLine}`}
				/>
				<div
					className={`${classes.baseLineCss} ${classes.hoizontalLineBase} ${classes.bottomLine}`}
				/>
				<div
					className={`${classes.baseLineCss} ${classes.verticleLineBase} ${classes.rightLine}`}
				/>
				<div
					className={`${classes.baseLineCss} ${classes.verticleLineBase} ${classes.leftLine}`}
				/>
				<div className={classes.ccContainer}>
					<Typography className={classes.cc}>CC</Typography>
				</div>
			</div>
			<Typography className={classes.logoText}>
				Christian Construction
			</Typography>
		</div>
	);
};

export default Logo;
