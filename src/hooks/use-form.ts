import { useFormik, FormikConfig } from 'formik';

export default function useForm<Values>(config: FormikConfig<Values>) {
	const { touched, errors, ...xs } = useFormik<Values>(config);
	return {
		...xs,
		errors: Object.fromEntries(Object.entries(errors)
			.filter(([k]) => touched[k as keyof Values])
			.map(([k, v]) => [k, v as string])),
	};
}
