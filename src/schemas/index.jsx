import * as Yup from "yup";

export const signUpSchemas = Yup.object({
fullName:Yup.string().required("Please enter your name"),
email:Yup.string().email().required("Please enter your email"),
password:Yup.string().min(6).required("Please enter your password"),
confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"password must match"),
});