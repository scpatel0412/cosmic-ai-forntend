import axios from './axios';  // Import AxiosError for proper typing
import { LoginUser } from './interface';
import { AxiosError } from 'axios'

const loginUserApi = async (user: LoginUser): Promise<any> => {
    try {
        const response = await axios.post("/users/login", user);
        return response.data;
    } catch (error: unknown) {
        // Handle general JavaScript errors
        // if (error instanceof Error) {
        //     console.error('Login error:', error.message);
        //     throw new Error(error.message || 'Something went wrong during login');
        // }

        // Check if the error is an AxiosError using axios.isAxiosError
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred during login';
            const statusCode = error.response?.status || 500;
            console.error(`Login error with status ${statusCode}:`, errorMessage);
            throw new Error(`Error ${statusCode}: ${errorMessage}`);
        } else {
            // Handle any unknown errors
            console.error('Unknown error occurred during login');
            throw new Error('Unknown error occurred during login');
        }
    }
};

export { loginUserApi };
