import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DocumentHead from '../components/DocumentHead';
import Layout from '../components/Layout';

export default function ContactUsPage(): ReactElement {
	const queryResult = useStaticQuery(graphql`
		query ContactUs {
			markdownRemark(frontmatter: {
				title: {
					eq: "Contact Us"
				}
			}) {
				html
			}
		}
	`);

	return (
		<>
			<DocumentHead title="Contact Us" />
			<Layout>
				<section>
					<h1>Contact Us</h1>
					<div dangerouslySetInnerHTML={{ __html: queryResult.markdownRemark.html }} />
				</section>
			</Layout>
		</>
	);
}
