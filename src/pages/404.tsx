import React, { StrictMode, ReactElement } from 'react';
import DocumentHead from '../components/document-head';
import Layout from '../components/layout';

export default function NotFoundPage(): ReactElement {
	return (
		<StrictMode>
			<DocumentHead title="Not Found" />
			<Layout>
				<h1>Not Found</h1>
			</Layout>
		</StrictMode>
	);
}
