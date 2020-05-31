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
		textAlign: 'center',
	},
	closedSection: {
		position: 'relative',
		borderTop: '1px solid rgba(151, 174, 255, .3)',
		borderBottom: '1px solid rgba(151, 174, 255, .3)',
		padding: '25px 0',
	},
	closedSectionHeader: {
		borderBottom: '1px solid transparent',
	},
}));

const Section = ({
	header,
	children,
	className,
	closedSection,
	sectionHeaderClass,
}) => {
	const classes = useStyles();

	return (
		<div
			className={`${className} ${
				closedSection ? classes.closedSection : ''
			}`}
		>
			<div className={classes.sectionHeaderContainer}>
				<Typography
					className={`${classes.sectionHeader} 
					${sectionHeaderClass} 
					${closedSection ? classes.closedSectionHeader : ''}`}
				>
					{header}
				</Typography>
			</div>
			<div>{children}</div>
		</div>
	);
};

Section.defaultProps = {
	className: '',
	children: <div />,
	closedSection: false,
	sectionHeaderClass: '',
};

Section.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
	closedSection: PropTypes.bool,
	sectionHeaderClass: PropTypes.string,
	header: PropTypes.string.isRequired,
};

export default Section;
