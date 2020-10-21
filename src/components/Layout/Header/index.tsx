import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styles from './index.module.scss';
import NavItem from './NavItem';

export default function LayoutHeader(): ReactElement {
	return (
		<Navbar as="header" variant="dark" bg="dark" expand="lg">
			<Navbar.Brand as={Link} to="/">
				<Image className={styles.logo} src="/images/logo.svg" alt="TripSit logo" fluid />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="main-header" />
			<Navbar.Collapse id="main-header">
				<nav>
					<Nav as="ul">
						<NavItem href="/">Home</NavItem>
						<NavItem href="/chat" hardLoad>Chat</NavItem>
					</Nav>
				</nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
