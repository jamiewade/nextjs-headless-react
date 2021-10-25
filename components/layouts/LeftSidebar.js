import PrimaryNavigation from "components/common/navigation/Primary";

const LeftSidebar = props => (
	<div className="flex w-full h-screen">
		<div className="lg:flex lg:flex-col lg:fixed lg:gap-4 lg:border-r lg:border-gray-200 lg:bg-gray-50 lg:p-6 lg:w-1/4 lg:h-full">
			<PrimaryNavigation />
		</div>

		<div className="lg:ml-auto lg:p-12 lg:w-3/4">
			{props.children}
		</div>
	</div>
);

export default LeftSidebar;
