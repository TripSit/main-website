import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
	title: string;
}

export default function DocumentHead({ title }: Props): ReactElement {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>TripSit &bull; {title}</title>
		</Helmet>
	);
}
