import React, { StrictMode, ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import DocumentHead from '../components/document-head';
import Layout from '../components/layout';
import Accordion from '../components/accordion';
import * as ContactUs from '../components/contact-us';

export default function ContactUsPage(): ReactElement {
	const queryResult = useStaticQuery(graphql`
		query ContactUsSections {
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
		<StrictMode>
			<DocumentHead title="Contact Us" />
			<Layout>
				<Container>
					<h1>Contact Us</h1>
					<div dangerouslySetInnerHTML={{ __html: queryResult.markdownRemark.html }} />
					<Accordion>
						<Accordion.Item
							eventKey="bans"
							title="I am banned (or am getting a message saying I'm banned) and would like to appeal (or get information on why I'm banned)."
						>
							<ContactUs.BanAppeals />
						</Accordion.Item>
						{/* <Accordion.Item
							eventKey="suggestions"
							title="I have a question/suggestion about your substance information (Wiki, factsheets, or other info)."
						>
							<ContactUs.Suggestions />
						</Accordion.Item> */}
						<Accordion.Item eventKey="volunteer" title="I'd like to apply for staff/volunteer.">
							<ContactUs.Volunteer />
						</Accordion.Item>
						<Accordion.Item eventKey="media" title="I am a media represenative looking to do a story/article.">
							<ContactUs.Media />
						</Accordion.Item>
					</Accordion>
				</Container>
			</Layout>
		</StrictMode>
	);
}
