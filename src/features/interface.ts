export interface LoginUser {
    email: string;
    password: string;
}

export interface ChatCreate {
    conv_id: number;
    question: string;
}