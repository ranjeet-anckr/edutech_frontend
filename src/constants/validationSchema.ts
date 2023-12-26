import { NUMBER } from "./number";
import * as Yup from "yup";
import { VALIDATION_MESSAGES } from "./validationMessages";

/* The code is defining a validation schema using the Yup library for a login form. The schema
specifies the validation rules for the username and password fields. */
export const LOGIN_VALIDATION_SCHEMA = Yup.object({
	username: Yup.string()
		// .email(VALIDATION_MESSAGES.EMAIL.INVALID)
		.max(NUMBER.TWO_FIFTY)
		.required(VALIDATION_MESSAGES.EMAIL.REQUIRED),
	// .matches(
	//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	//   VALIDATION_MESSAGES.EMAIL.INVALID
	// ),
	password: Yup.string()
		// .min(NUMBER.EIGHT, VALIDATION_MESSAGES.PASSWORD.MIN_LENGTH)
		.required(VALIDATION_MESSAGES.PASSWORD.REQUIRED),
});

/* The code is defining a validation schema using the Yup library for a company form. The schema
specifies the validation rules for the companyName and companyBio fields. */
export const COMPANY_VALIDATION_SCHEMA = Yup.object({
	companyName: Yup.string()
		.required(VALIDATION_MESSAGES.COMPANY.REQUIRED)
		.min(NUMBER.FIVE, VALIDATION_MESSAGES.COMPANY.MIN_LENGTH),

	companyBio: Yup.string()
		.required(VALIDATION_MESSAGES.COMPANYBIO.REQUIRED)
		.min(NUMBER.FIVE, VALIDATION_MESSAGES.COMPANY.MIN_LENGTH),
});

/* The code is defining a validation schema using the Yup library for changing an email address. The
schema specifies the validation rules for the username field, which represents the new email
address. */
export const CHANGE_EMAIL_VALIDATION_SCHEMA = Yup.object({
	email: Yup.string()
		.email(VALIDATION_MESSAGES.EMAIL.INVALID)
		.max(NUMBER.TWO_FIFTY)
		.required(VALIDATION_MESSAGES.EMAIL.REQUIRED)
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, VALIDATION_MESSAGES.EMAIL.INVALID),
});

export const CHANGE_PASSWORD_VALIDATION_SCHEMA = Yup.object().shape({
	currentPassword: Yup.string().required("Current password is required"),

	newPassword: Yup.string()
		.required(VALIDATION_MESSAGES.NEWPASSWORD.REQUIRED)
		.min(NUMBER.EIGHT, VALIDATION_MESSAGES.NEWPASSWORD.MIN_LENGTH)
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, VALIDATION_MESSAGES.NEWPASSWORD.MATCHPATTERN),

	confirmNewPassword: Yup.string()
		.required(VALIDATION_MESSAGES.CONFIRMNEWPASSWORD.REQUIRED)
		.oneOf([Yup.ref("newPassword")], VALIDATION_MESSAGES.CONFIRMNEWPASSWORD.MATCHPATTERN),
});
