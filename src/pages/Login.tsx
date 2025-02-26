import Common from "./Common";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { logValidationSchema } from "../features/validation";
import { loginUserApi } from "../features/api";
import { LoginUser } from "../features/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function Login() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate, error } = useMutation<any, Error, LoginUser>({
        mutationFn: loginUserApi,
        onSuccess: (data: any) => {
            console.log("Login successful", data);
            if (data) {
                localStorage.setItem("token", data.access_token);
                toast.success(`login successful`);
                navigate("/chat");
                // context.resetForm();
            }
            // Optionally invalidate queries if needed
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (err: Error) => {
            console.error("Login error", err);
            toast.error(err.message);
            // context.resetForm();
        },
    });

    function LoginSubmit(values: LoginUser) {
        try {
            mutate({ email: values.email, password: values.password });
        } catch (err) {
            console.log(error, err);
        }
    }

    return (
        <Common>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <Formik
                                initialValues={{ email: "", password: "", remember: false }}
                                validationSchema={logValidationSchema}
                                onSubmit={async (values, actions) => {
                                    await LoginSubmit(values);
                                    actions.resetForm();
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your email
                                            </label>
                                            <Field
                                                name="email"
                                                type="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="name@company.com"
                                            />
                                            {errors.email && touched.email && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.email}
                                                </div>
                                            )}
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
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            {errors.password && touched.password && (
                                                <div className="text-red-500 text-sm">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <Field
                                                        name="remember"
                                                        aria-describedby="remember"
                                                        type="checkbox"
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label
                                                        htmlFor="remember"
                                                        className="text-gray-500 dark:text-gray-300"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <Link
                                                to="/forget"
                                                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            >
                                                Forgot password?
                                            </Link>
                                            <button
                                                type="submit"
                                                className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                            >
                                                Sign in
                                            </button>
                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Don’t have an account yet?{" "}
                                                <Link
                                                    to="/register"
                                                    className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                                >
                                                    Sign up
                                                </Link>
                                            </p>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            {/* <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </Common>
    );
}

export default Login;
