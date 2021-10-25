function createMarkup(content) {
	return {__html: content };
}

export default function RichText({ content, textAlign }) {
	if (content || textAlign) {
		var baseClasses = "max-w-none prose";
		var textAlignClasses = "text-" + textAlign;

		var classes = [baseClasses, textAlignClasses].join(" ")

		return (
			<div className={ classes }>
				<div dangerouslySetInnerHTML={createMarkup(content)} />
			</div>
		)

	} else {
		return null
	}
}
