import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import FieldGroup, { ControlProps } from './group';

interface Props extends ControlProps {
	value?: string;
	type?: string;
	required?: boolean;
}

export default function TextField({
	value,
	disabled = false,
	type = 'text',
	required,
	...props
}: Props): ReactElement {
	return (
		<FieldGroup {...props}>
			<Form.Control type={type} disabled={disabled} value={value} required={required} />
		</FieldGroup>
	);
}
