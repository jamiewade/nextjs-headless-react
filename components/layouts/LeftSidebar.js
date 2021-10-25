import Sidebar from "components/common/Sidebar";

const LeftSidebar = props => (
	<div className="flex w-full h-screen">
		<div className="fixed top-0 left-0 w-1/4 h-full">
			<Sidebar position="left" />
		</div>

		<div className="ml-auto p-12 w-3/4">
			{props.children}
		</div>
	</div>
);

export default LeftSidebar;
