import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Navbar, Nav, Image } from 'react-bootstrap';
import NavItem from './nav-item';

const Logo = styled(Image)`
	max-height: 2.8rem;
`;

export default function LayoutHeader(): ReactElement {
	return (
		<Navbar as="header" variant="dark" bg="dark" expand="lg">
			<Navbar.Brand as={Link} to="/">
				<Logo src="/images/logo.svg" alt="TripSit logo" fluid />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="main-header" />
			<Navbar.Collapse id="main-header">
				<nav>
					<Nav as="ul">
						<NavItem href="/">Home</NavItem>
						<NavItem href="/chat" hardLoad>Chat</NavItem>
						<NavItem href="/contact-us">Contact Us</NavItem>
					</Nav>
				</nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
