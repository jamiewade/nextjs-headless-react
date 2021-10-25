import PrimaryNavigation from "components/common/navigation/Primary";

export default function Sidebar({ position }) {
	var baseClasses = "flex flex-col gap-4 border-gray-200 bg-gray-50 p-6 w-full h-full"

	if (position === "left") {
		var borderClasses = "border-r"

	} else if (position === "right") {
		var borderClasses = "border-l"
		
	}

	var sidebarClasses = [baseClasses, borderClasses].join(" ")

	return (
		<div className={ sidebarClasses }>
			<PrimaryNavigation />
		</div>
	)
}
