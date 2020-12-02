import React, { StrictMode, ReactElement } from 'react';
import { DocumentHead, Layout, HeroIntro } from '../components';

interface Props {
	name: string;
}

export default function FactsheetTemplate({ name }: Props): ReactElement {
	return (
		<StrictMode>
			<DocumentHead title={`Factsheet - ${name}`} />
			<Layout>
				<HeroIntro />
			</Layout>
		</StrictMode>
	);
}
