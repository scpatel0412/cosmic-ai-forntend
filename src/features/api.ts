import axios from './axios';
import { ChatCreate, LoginUser } from './interface';
import { AxiosError } from 'axios'

const loginUserApi = async (user: LoginUser): Promise<any> => {
    try {
        const response = await axios.post("/users/login", user);
        return response.data;
    } catch (error: unknown) {
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


const userConversationApi = async (): Promise<any> => {
    try {
        const response = await axios({
            url: "/conversations/user/all",
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred';
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

const conversationChatApi = async (id: number | null): Promise<any> => {
    if (id !== null) {
        try {
            const response = await axios({
                url: "/chats/conversation/all",
                method: "POST",
                data: {
                    conv_id: id
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            return response.data;
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                // Extract error details from AxiosError
                const errorMessage = error.response?.data?.message || 'An error occurred';
                const statusCode = error.response?.status || 500;
                console.error(`Login error with status ${statusCode}:`, errorMessage);
                throw new Error(`Error ${statusCode}: ${errorMessage}`);
            } else {
                // Handle any unknown errors
                console.error('Unknown error occurred during login');
                throw new Error('Unknown error occurred during login');
            }
        }
    }

};

const conversationCreateApi = async (): Promise<any> => {
    try {
        const response = await axios({
            url: "/conversations/create",
            method: "POST",
            data: {},
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred';
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

const chatCreateApi = async (data1: ChatCreate): Promise<any> => {
    try {
        const response = await axios({
            url: "/chats/create",
            method: "POST",
            data: data1,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred';
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

const userProfileApi = async (): Promise<any> => {
    try {
        const response = await axios({
            url: "/users/me",
            method: "POST",
            data: {},
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred';
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

const stripeProducts = async (): Promise<any> => {
    try {
        const response = await axios({
            url: "/stripe/complete/products",
            method: "GET",
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            // Extract error details from AxiosError
            const errorMessage = error.response?.data?.message || 'An error occurred';
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

export { loginUserApi, userConversationApi, conversationChatApi, conversationCreateApi, chatCreateApi, userProfileApi, stripeProducts };
