import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from './Section';
import getIsInViewport from '../../utils/isInViewport';

const useStyles = makeStyles(() => ({
	missionContentContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	missionStatement: {
		fontSize: '1.5rem',
		textAlign: 'center',
		opacity: '0',
		position: 'relative',
		top: '20px',
		transition: 'all .5s ease',
	},
	missionStatementInView: {
		opacity: '1',
		top: '0',
	},
}));

const Mission = () => {
	const classes = useStyles();
	const [inView, setInView] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const missionStatmentElScroll = document.getElementById(
				'missionStatment',
			);
			const isInViewportScroll = getIsInViewport(missionStatmentElScroll);

			if (!inView && isInViewportScroll) {
				setInView(isInViewportScroll);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	});

	useEffect(() => {
		window.addEventListener('load', () => {
			const missionStatmentElScroll = document.getElementById(
				'missionStatment',
			);
			const isInViewportScroll = getIsInViewport(missionStatmentElScroll);

			if (!inView && isInViewportScroll) {
				setInView(isInViewportScroll);
			}
		});

		return () => {
			window.removeEventListener('load', () => {});
		};
	});

	return (
		<Section header="Our Mission">
			<div className={classes.missionContentContainer}>
				<Typography
					id="missionStatment"
					className={`${classes.missionStatement} ${
						inView ? classes.missionStatementInView : ''
					}`}
				>
					Make your dream kitchen a reality.
				</Typography>
			</div>
		</Section>
	);
};

export default Mission;
