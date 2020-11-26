import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'gatsby';
import { Nav } from 'react-bootstrap';

interface Props {
	children: ReactNode;
	href: string;
	hardLoad?: boolean;
}

export default function HeaderNavItem({
	children,
	href,
	hardLoad = false,
}: Props): ReactElement {
	return (
		<Nav.Item as="li">
			{hardLoad ? (
				<Nav.Link href={href}>
					{children}
				</Nav.Link>
			) : (
				<Nav.Link as={Link} href={href} to={href}>
					{children}
				</Nav.Link>
			)}
		</Nav.Item>
	);
}
