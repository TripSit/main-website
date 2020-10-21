import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'gatsby';
import { Nav } from 'react-bootstrap';

interface Props {
	children: ReactNode;
	to: string;
}

export default function HeaderNavItem({ children, to }: Props): ReactElement {
	return (
		<Nav.Item as="li">
			<Nav.Link as={Link} to={to}>
				{children}
			</Nav.Link>
		</Nav.Item>
	);
}
