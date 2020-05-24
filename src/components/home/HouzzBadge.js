import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
	badgeImg: {
		borderRadius: '2px',
		width: '90px',
		height: '90px',
		border: '0',
	},
	box: {
		width: '90px',
		height: '90px',
		borderRadius: '2px',
	},
}));

const HouzzBadge = ({ code }) => {
	const classes = useStyles();

	return (
		<Box className={classes.box} boxShadow={2}>
			<a href="https://www.houzz.com/pro/wayne3ck/christian-construction">
				<img
					src={`https://st.hzcdn.com/static/badge_${code}@2x.png`}
					alt="Wayne Christian in Lafayette, CA on Houzz"
					className={classes.badgeImg}
				/>
			</a>
		</Box>
	);
};

HouzzBadge.propTypes = {
	code: PropTypes.string.isRequired,
};

export default HouzzBadge;
