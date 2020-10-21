import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
	title: string;
}

export default function DocumentHead(props: Props) {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>TripSit &bull; {props.title}</title>
		</Helmet>
	);
}
