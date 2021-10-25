function createMarkup(content) {
	return {__html: content };
}

export default function RichText({ content }) {
	if (content) {
		return (
			<div className="max-w-none prose">
				<div dangerouslySetInnerHTML={createMarkup(content)} />
			</div>
		)

	} else {
		return null
	}
}
