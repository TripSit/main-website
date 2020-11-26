import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';

interface FieldProps {
	name: string;
	label?: string;
	error?: string;
}

export interface ControlProps extends FieldProps {
	disabled?: boolean;
}

interface Props extends FieldProps {
	children: ReactElement;
}

export default function FieldGroup({
	children,
	name,
	label,
	error,
}: Props): ReactElement {
	return (
		<Form.Group controlId={name}>
			{label && (
				<Form.Label>{label}</Form.Label>
			)}
			{children}
			{error && (
				<Form.Control.Feedback className="text-danger">
					{error}
				</Form.Control.Feedback>
			)}
		</Form.Group>
	);
}
