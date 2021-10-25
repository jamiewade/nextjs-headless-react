export default function PageTitle({ title }) {
	if (title) {
		return (
			<div>
				<h1 className="font-bold leading-tight text-5xl">{ title }</h1>
			</div>
		)
	
	} else {
		return null
	}
}
