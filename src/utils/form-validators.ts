import * as yup from 'yup';

export const noSpaceRegExp = /^\S*$/;
export const passwordRegExp =
	/^(?:(?=^.{3,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;

export const validateRequiredName = (fieldName: string = 'Name') =>
	yup
		.string()
		.trim()
		.required(`${fieldName} is required.`)
		.min(2, 'Minimum ${min} characters');

export const validateRequiredEmail = () =>
	yup.string().trim().required('This field is required').email('invalid email ID');

export const validateRequiredPassword = () =>
	yup
		.string()
		.trim()
		.required('This field is required')
		.matches(noSpaceRegExp, 'No spaces allowed')
		.matches(
			passwordRegExp,
			'Should contain lowercase, uppercase and number',
		)
		.min(5, 'Minimum ${min} characters')
		.max(15, 'Maximum ${max} characters');

export const validateRequiredUsername = () =>
	yup
		.string()
		.trim()
		.required('This field is required')
		.min(2, 'Minimum ${min} characters long')
		.max(15, 'Oo no! The username cannot be longer than ${max} characters');
