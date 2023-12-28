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

export const courseValidationSchema = Yup.object({
  courseName: Yup.string().required("Course Name is required"),
  description: Yup.string().required("Description is required"),
  courseImg: Yup.string()
    .url("Invalid URL format")
    .required("Course Image URL is required"),
  courseDiscount: Yup.number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100"),
  courseCategories: Yup.string().required("Categories are required"),
  coursePrice: Yup.number()
    .min(0, "Price cannot be negative")
    .required("Course Price is required"),
  coursePdf: Yup.string()
    .url("Invalid PDF URL format")
    .required("Course PDF URL is required"),
});
