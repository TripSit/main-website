import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const FormControls = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	button:not(:last-of-type) {
		margin-right: .5em;
	}
`;

export default FormControls;
