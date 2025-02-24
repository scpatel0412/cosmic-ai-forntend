import Common from "./Common";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpValidationSchema } from "@/features/validation";

function Register() {
    return (
        <Common>
            <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                    confirmPassword: "",
                                    username: "",
                                    first_name: "",
                                    last_name: "",
                                    contact: "",
                                    remember: false,
                                    terms: false,
                                }}
                                validationSchema={signUpValidationSchema}
                                onSubmit={async (values, actions) => {
                                    // Submit logic (e.g., API call)
                                    console.log(values);
                                    actions.resetForm();
                                }}
                            >
                                {({ handleSubmit}) => (
                                    <Form
                                        className="space-y-4 md:space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your email
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="name@company.com"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="confirmPassword"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Confirm Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="confirmPassword"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Username
                                            </label>
                                            <Field
                                                type="text"
                                                name="username"
                                                id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="username"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                First Name
                                            </label>
                                            <Field
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="first_name"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="last_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Last Name
                                            </label>
                                            <Field
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="last_name"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="contact"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Contact Number
                                            </label>
                                            <Field
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name="contact"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <Field
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="terms"
                                                    className="font-light text-gray-500 dark:text-gray-300"
                                                >
                                                    I accept the{" "}
                                                    <a
                                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                        href="#"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        <ErrorMessage
                                            name="terms"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />

                                        <button
                                            type="submit"
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                            Create an account
                                        </button>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account?{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            >
                                                Login here
                                            </a>
                                        </p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </Common>
    );
}

export default Register;
