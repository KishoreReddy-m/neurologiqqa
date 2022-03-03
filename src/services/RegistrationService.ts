import { AxiosInstance } from 'axios';
import { Login } from "src/interface/Login";
import { Register } from "src/interface/Register";
import { ResendEmail } from 'src/interface/ResendEmail';
import { EmailVerify } from 'src/interface/EmailVerify';

export const getUserDetails = async (
    axios: AxiosInstance,
    userId: string
): Promise<any> => {
    const { data } = await axios.get(
        `user/${userId}`
    );
    return data;
};

export const userLogin = async (
    axios: AxiosInstance,
    login: Login
): Promise<any> => {
    const { data } = await axios.post(
        `/authentication/login`, login
    );
    return data;
};

export const registerUser = async (
    axios: AxiosInstance,
    user: Register
): Promise<any> => {
    const { data } = await axios.post(
        `/authentication/register`, user
    );
    return data;
};
export const resendEmail = async (
    axios: AxiosInstance,
    user: ResendEmail
): Promise<any> => {
    console.log('data:--', user);
    const { data } = await axios.post(
        `/authentication/verify/resend`, user
    );
    return data;
};
export const emailVerify = async (
    axios: AxiosInstance,
    user: EmailVerify
): Promise<any> => {
    console.log('data:--', user);
    const { data } = await axios.post(
        `/authentication/verify`, user
    );
    return data;
};