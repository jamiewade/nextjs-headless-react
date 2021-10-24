import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ blogPosts }) {
	console.log('blogPosts', blogPosts);

	return (
		<div>
			<h1>Welcome</h1>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nemo dicta mollitia ab explicabo temporibus nisi illum molestias unde odit magni soluta aut nulla iusto, modi minus quaerat atque.</p>
		</div>
	)
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'http://cms.test/api/',
		cache: new InMemoryCache()
	});

	const { data } = await client.query({
		query: gql`
			query GetBlogPosts {
				entries (section: "blog") {
					title
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
