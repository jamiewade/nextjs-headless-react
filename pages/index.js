import ContentArea from "components/layouts/LeftSidebar"

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../components/cards/Card"

const client = new ApolloClient({
	uri: "http://cms.test/api",
	cache: new InMemoryCache()
});

const Index = ({ blogPosts }) => {
	return (
		<ContentArea>
			{ blogPosts.map(blogPost => {
				return (
					<div key={ blogPost.id }>
						<Card content={ blogPost.contentBuilder }
							date={ blogPost.postDate }
							summary={ blogPost.summary }
							title={ blogPost.title } />
					</div>
				)
			}) }
		</ContentArea>
	)
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetBlogPosts {
				entries (section: "blog") {
					id,
					postDate @formatDateTime (format: "jS F Y"),
					title
					... on blog_blogPost_Entry {
						contentBuilder {
							__typename,
							... on contentBuilder_richText_BlockType {
								id,
								text,
								textAlign
							},
							... on contentBuilder_button_BlockType {
								id,
								buttonColour,
								buttonTarget,
								buttonText
							}
						},
						summary
					}
				}
			}
		`
	});

	return {
		props: {
			blogPosts: data.entries
		}
	}
}

export default Index;
