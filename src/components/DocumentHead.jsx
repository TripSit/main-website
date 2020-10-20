import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function DocumentHead({ title }) {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>TripSit &bull; {title}</title>
		</Helmet>
	);
}

DocumentHead.propTypes = {
	title: PropTypes.string.isRequired,
};

export default DocumentHead;
