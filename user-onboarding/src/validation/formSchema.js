import * as Yup from "yup";

// Here goes the schema for the form
const formSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    name: Yup
        .string()
        .min(5, "Name must be at least 5 characters long.")
        .required("Name is Required"),
    password: Yup
        .string()
        .min(7, "Password must be at least 7 characters long.")
        .required("Password is Required"),
    termsOfService: Yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
});

export default formSchema