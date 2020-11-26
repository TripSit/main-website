import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import FieldGroup, { ControlProps } from './group';

interface Props extends ControlProps {
	value?: string;
}

export default function TextareaField({ value, disabled = false, ...props }: Props): ReactElement {
	return (
		<FieldGroup {...props}>
			<Form.Control as="textarea" disabled={disabled} value={value} />
		</FieldGroup>
	);
}
