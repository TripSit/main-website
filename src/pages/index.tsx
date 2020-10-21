import React from 'react';
import { PageProps } from 'gatsby';
import DocumentHead from '../components/DocumentHead';
import Layout from '../components/Layout';

export default function Home(props: PageProps) {
	return (
		<>
			<DocumentHead title="Home" />
			<Layout>
				<h1>Home</h1>
			</Layout>
		</>
	);
}
