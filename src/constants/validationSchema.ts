import { NUMBER } from "./number";
import * as Yup from "yup";
import { VALIDATION_MESSAGES } from "./validationMessages";

export const LOGIN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email(VALIDATION_MESSAGES.EMAIL.INVALID)
    .max(NUMBER.TWO_FIFTY)
    .required(VALIDATION_MESSAGES.EMAIL.REQUIRED),
  password: Yup.string()
    .min(NUMBER.EIGHT, VALIDATION_MESSAGES.PASSWORD.MIN_LENGTH)
    .required(VALIDATION_MESSAGES.PASSWORD.REQUIRED),
});
