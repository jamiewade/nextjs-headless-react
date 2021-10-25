import Link from "next/link"

export default function PrimaryNavigation() {
	return (
		<div>
			<ul className="flex flex-col gap-3 text-center text-xl">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>

				<li>
					<Link href="/example-page-01">
						<a>Example Page 01</a>
					</Link>
				</li>

				<li>
					<Link href="/example-page-02">
						<a>Example Page 02</a>
					</Link>
				</li>

				<li>
					<Link href="/example-page-03">
						<a>Example Page 03</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}
