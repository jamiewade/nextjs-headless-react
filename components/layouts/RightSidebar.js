import Sidebar from "components/common/Sidebar";

const RightSidebar = props => (
	<div className="flex w-full h-screen">
		<div className="mr-auto p-12 w-3/4">
			{props.children}
		</div>

		<div className="fixed top-0 right-0 w-1/4 h-full">
			<Sidebar position="right" />
		</div>
	</div>
);

export default RightSidebar;
