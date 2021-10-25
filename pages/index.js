import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../components/cards/Card"

const client = new ApolloClient({
	uri: "http://cms.test/api",
	cache: new InMemoryCache()
});

export default function Home({ blogPosts }) {
	return (
		<div>
			<h1>Welcome</h1>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nemo dicta mollitia ab explicabo temporibus nisi illum molestias unde odit magni soluta aut nulla iusto, modi minus quaerat atque.</p>

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
		</div>
	)
}

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
								text
							},
							... on contentBuilder_button_BlockType {
								id,
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
