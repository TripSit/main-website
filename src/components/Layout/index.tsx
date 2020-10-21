import React, { ReactElement, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
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
