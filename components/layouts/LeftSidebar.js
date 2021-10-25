import PageTitle from "components/common/PageTitle";
import Sidebar from "components/common/Sidebar";

const LeftSidebar = props => (
	<div className="flex w-full h-screen">
		<div className="fixed top-0 left-0 w-1/4 h-full">
			<Sidebar position="left" />
		</div>

		<div className="ml-auto p-12 w-3/4">
			<div className="flex flex-col gap-6 w-full h-full">
				<PageTitle title="Left Sidebar Lorem Ipsum Dolor Sit" />

				{props.children}
			</div>
		</div>
	</div>
);

export default LeftSidebar;
