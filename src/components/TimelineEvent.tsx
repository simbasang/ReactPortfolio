import "../Styles/TimelineEvent.css";

interface Props {
	year: string;
	title: string;
	underTitle: string;
	text: string;
}

function TimelineEvent(props: Props) {
	return (
		<>
			<div className="timeline-top-container flex-row">
				<div className="timeline-year-container">
					<div className="year">{props.year}</div>
					<div className="year-pointer"></div>
				</div>
				<div className="timeline-container ">
					<div className="dot-container">
						<div className="dot"></div>
					</div>
					<div className="verticle-line"></div>
				</div>
				<div className="timeline-text">
					<h2>{props.title}</h2>
					<h4>{props.underTitle}</h4>
					<p>{props.text}</p>
				</div>
			</div>
		</>
	);
}

export default TimelineEvent;
