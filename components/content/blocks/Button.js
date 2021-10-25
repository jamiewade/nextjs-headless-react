import Link from "next/link"

export default function Button({ colour, target, text }) {
	if (colour || target || text) {
		var baseClasses = "inline-block transition duration-200 ease-linear rounded px-4 py-3 text-center";

		if (colour === "primary") {
			var colourClasses = "bg-red-500 text-white hover:bg-red-600";

		} else if (colour === "secondary") {
			var colourClasses = "bg-yellow-500 text-white hover:bg-yellow-600";
			
		}

		var classes = [baseClasses, colourClasses].join(" ");

		return (
			<div>
				<Link href={ target }>
					<a className={ classes }>{ text }</a>
				</Link>
			</div>
		)

	} else {
		return null

	}
}
