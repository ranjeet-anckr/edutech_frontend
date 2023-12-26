/* The code is defining an object named `VALIDATION_MESSAGES` which contains validation messages for
email and password fields. */

export const VALIDATION_MESSAGES = {
	EMAIL: {
		REQUIRED: "Email is mandatory.",
		INVALID: "Please enter a valid email address.",
	},
	PASSWORD: {
		REQUIRED: "Password is mandatory.",
		MIN_LENGTH: "Password must be at least 8 characters.",
		FORMAT: "Must be 8 characters, at least one alpha-numeric, one special character, one uppercase and one lowercase.",
		MATCH: "Confirm New Password must match with New Password.",
	},
	COMPANY: {
		REQUIRED: "Company Name is mandatory.",
		MIN_LENGTH: "Company Name must be at least 5 characters.",
	},
	COMPANYBIO: {
		REQUIRED: "Company Bio is mandatory.",
		MIN_LENGTH: "Company Bio must be at least 5 characters.",
	},
	NEWPASSWORD: {
		REQUIRED: "New password is required",
		MIN_LENGTH: "New password must be at least 8 characters.",
		MATCHPATTERN: "Password must contain at least one lowercase letter, one uppercase letter, and one number",
	},
	CONFIRMNEWPASSWORD: {
		REQUIRED: "Confirm new password is required",
		MATCHPATTERN: "New password and  confirm new password must same.",
	},
};
