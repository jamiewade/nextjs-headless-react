function createMarkup(content) {
	return {__html: content };
}

export default function RichText({ content }) {
	if (content) {
		return (
			<div>
				<div dangerouslySetInnerHTML={createMarkup(content)} />
			</div>
		)

	} else {
		return null
	}
}
