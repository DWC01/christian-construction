import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
	sectionContainer: {
		maxWidth: '1230px',
		margin: '0 auto',
	},
	sectionHeader: {
		fontSize: '1.2rem',
		margin: '0 auto 50px auto',
		padding: '0 30px 10px 30px',
		borderBottom: '1px solid #ddd',
		width: 'fit-content',
	},
}));

const Section = ({ header, children, sectionHeaderClass }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.sectionHeaderContainer}>
				<Typography
					className={`${classes.sectionHeader} ${sectionHeaderClass}`}
				>
					{header}
				</Typography>
			</div>
			<div>{children}</div>
		</>
	);
};

Section.defaultProps = {
	children: <div />,
	sectionHeaderClass: '',
};

Section.propTypes = {
	children: PropTypes.node,
	sectionHeaderClass: PropTypes.string,
	header: PropTypes.string.isRequired,
};

export default Section;
