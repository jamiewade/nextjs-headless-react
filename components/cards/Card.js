import Button from "components/blocks/Button"
import RichText from "components/blocks/RichText"

export default function Card({ content, date, summary, title }) {
	return (
		<div>
			<h2>{ title }</h2>

			<p>{ summary }</p>

			<p>{ date }</p>

			<div>
				{ content.map(block => {
					if (block.__typename === "contentBuilder_richText_BlockType") {
						return (
							<RichText key={ block.id }
								content={ block.text }
								textAlign={ block.textAlign } />
						)

					} else if (block.__typename === "contentBuilder_button_BlockType") {
						return (
							<Button key={ block.id }
								colour={ block.buttonColour }
								target={ block.buttonTarget }
								text={ block.buttonText } />
						)

					}
				}) }
			</div>
		</div>
	)
}
