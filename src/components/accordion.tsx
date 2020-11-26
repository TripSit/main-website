import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import { Accordion as BsAccordion, Card, Button } from 'react-bootstrap';

interface Props {
	children: ReactNode | ReactNodeArray;
}

function Accordion({ children }: Props): ReactElement {
	return (
		<BsAccordion>
			{children}
		</BsAccordion>
	);
}

interface ItemProps {
	children: ReactNode;
	title: string;
	eventKey: string;
}

function AccordionItem({ children, title, eventKey }: ItemProps): ReactElement {
	return (
		<Card>
			<Card.Header>
				<BsAccordion.Toggle as={Button} variant="link" eventKey={eventKey}>
					{title}
				</BsAccordion.Toggle>
			</Card.Header>
			<BsAccordion.Collapse eventKey={eventKey}>
				<Card.Body>{children}</Card.Body>
			</BsAccordion.Collapse>
		</Card>
	);
}

Accordion.Item = AccordionItem;

export default Accordion;
