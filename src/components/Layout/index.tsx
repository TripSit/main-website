import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: JSX.Element;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	);
}
