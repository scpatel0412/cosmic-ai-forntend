import * as Yup from "yup";


const logValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    remember: Yup.boolean(),
});


export {logValidationSchema}