import React, { StrictMode, ReactElement } from 'react';
import { Layout, DocumentHead } from '../components';

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
