import Link from "next/link"

export default function Button({ target, text }) {
	if (target || text) {
		return (
			<div>
				<Link href={ target }>
					<a>{ text }</a>
				</Link>
			</div>
		)

	} else {
		return null

	}
}
