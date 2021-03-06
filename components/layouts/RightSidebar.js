import PageTitle from "components/common/PageTitle";
import Sidebar from "components/common/Sidebar";

const RightSidebar = props => (
	<div className="flex w-full h-screen">
		<main className="mr-auto p-12 w-3/4">
			<div className="flex flex-col gap-6 w-full h-full">
				<PageTitle title="Right Sidebar Lorem Ipsum Dolor Sit" />

				{props.children}
			</div>
		</main>

		<aside className="fixed top-0 right-0 w-1/4 h-full">
			<Sidebar position="right" />
		</aside>
	</div>
);

export default RightSidebar;
