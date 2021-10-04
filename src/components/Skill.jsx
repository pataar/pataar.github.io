export default function Skill({ icon, iconRaw = undefined, label, url = undefined }) {
	return (
		<div className="skill">
			<div className="icon">{iconRaw || <i className={`fab fa-fw fa-${icon}`} aria-hidden="true" />}</div>
			<div className="label">
				{url ? (
					<a href={url} target="_blank" rel="noreferrer">
						{label}
					</a>
				) : (
					label
				)}
			</div>
		</div>
	);
}
