import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
	title: string;
}

export default function DocumentHead({ title }: Props): ReactElement {
	return (
		<Helmet>
			<title>TripSit &bull; {title}</title>
		</Helmet>
	);
}
