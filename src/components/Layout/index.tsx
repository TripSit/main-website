import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: React.ReactElement;
}

export default function Layout(props: Props) {
	return (
		<>
			<Header />
			<main>
				{props.children}
			</main>
			<Footer />
		</>
	);
}
