// import React, { ReactElement, FormEvent } from 'react';
// import { Button,
// 	Row,
// 	Col,
// } from 'react-bootstrap';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import styles from './common.module.scss';

// enum PartOfSite {
// 	Chat,
// 	FactSheets,
// }

// interface FormValues {
// 	email?: string;
// 	partOfSite?: PartOfSite | string;
// 	pageUrl?: string;
// 	questionOrSuggestion: string;
// }

// const validationSchema = Yup.object().shape({
// 	email: Yup.string().email(),
// 	partOfSite: Yup.string(),
// 	pageUrl: Yup.string().url(),
// 	questionOrSuggestion: Yup.string().required(),
// }).required();

// export default function ContactUsSuggestions(): ReactElement {
// 	async function onSubmit(): Promise<null> {
// 	}

// 	return (
// 		<section>
// 			<h1>Substance Information Suggestions or Questions</h1>
// 			<p>
// 				If you have a suggestion or question regarding any of our information on substances,
// 				regardless where it&apos;s presented, you can use this form to contact the people in charge
// 				of that information. We appreciate your desire to ensure our information is up to date and
// 				accurate!
// 			</p>
// 			<Formik<FormValues>
// 				validationSchema={validationSchema}
// 				initialValues={{
// 					email: '',
// 					partOfSite: '',
// 					pageUrl: '',
// 					questionOrSuggestion: '',
// 				}}
// 				onSubmit={onSubmit}
// 			>
// 				{({
// 					isSubmitting,
// 					touched,
// 					errors,
// 					handleSubmit,
// 				}) => (
// 					<Form
// 						method="post"
// 						action="/suggestion"
// 						onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
// 						noValidate
// 					>
// 						<div />
// 					</Form>
// 				)}
// 			</Formik>
// 		</section>
// 	);
// }
