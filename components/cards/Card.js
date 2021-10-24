export default function Card({ date, summary, title }) {
	return (
		<div>
			<h2>{ title }</h2>
			<p>{ summary }</p>
			<p>
				<em>{ date }</em>
			</p>
		</div>
	)
}
