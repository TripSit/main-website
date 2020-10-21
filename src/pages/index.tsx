import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import DocumentHead from '../components/DocumentHead';
import Layout from '../components/Layout';
import HeroIntro from '../components/Home/HeroIntro';

export default function Home(props: PageProps): ReactElement {
	return (
		<>
			<DocumentHead title="Home" />
			<Layout>
				<HeroIntro />
			</Layout>
		</>
	);
}
