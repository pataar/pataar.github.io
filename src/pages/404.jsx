import DefaultLayout from "../components/DefaultLayout";
import SearchEngineOptimalisation from "../components/SearchEngineOptimalisation";

export default function NotFoundPage() {
	return (
		<DefaultLayout>
			<SearchEngineOptimalisation title="404: Not Found" />
			<div className="content-box clearfix">
				<h1>That page doesn&#39;t exist.</h1>
				<br />
			</div>
		</DefaultLayout>
	);
}
