import { AxiosInstance } from 'axios';
import { Company } from "src/interface/Company";
import { PageData } from "src/interface/PageData";
import { BaseInformation, User } from "src/interface/User";

export const getCurrentUser = async (
    axios: AxiosInstance,
): Promise<User> => {
    const { data } = await axios.get(
        `/users/me`
    );
    return data;
};

export const updateUserInformation = async (
    axios: AxiosInstance,
    information: BaseInformation
): Promise<string> => {
    const { data } = await axios.put(
        `/users/me/information`, information
    );
    return data;
};

export const updateUserInformationById = async (
    axios: AxiosInstance,
    information: BaseInformation,
    userId: string
): Promise<string> => {
    const { data } = await axios.put(
        `/users/${userId}/information`, information
    );
    return data;
};


export const uploadUserAvatar = async (
    axios: AxiosInstance,
    file: File
): Promise<string> => {
    const formData = new FormData()
    formData.append('avatar', file)
    const { data } = await axios.put(
        `/users/me/avatar`, formData
    );
    return data;
};

export const getUserById = async (
    axios: AxiosInstance,
    userId: string
): Promise<User> => {
    const { data } = await axios.get(
        `/users/${userId}`
    );
    return data;
};

export const deleteUserById = async (
    axios: AxiosInstance,
    userId: string
): Promise<string> => {
    const { data } = await axios.delete(
        `/users/${userId}`
    );
    return data;
};

export const deleteCurrentUser = async (
    axios: AxiosInstance,
): Promise<string> => {
    const { data } = await axios.delete(
        `/users/me`
    );
    return data;
};

export const deleteUserAvatar = async (
    axios: AxiosInstance,
): Promise<string> => {
    const { data } = await axios.delete(
        `/users/me/avatar`
    );
    return data;
};


export const getUsers = async (
    axios: AxiosInstance,
    pageIndex: number
): Promise<PageData> => {
    const { data } = await axios.get(
        `/users?page=${pageIndex}`
    );
    return data;
};


export const updateCompany = async (
    axios: AxiosInstance,
    company: Company
): Promise<string> => {
    const { data } = await axios.put(
        `/users/me/company`, company
    );
    return data;
};

export const UpdateCompanyById = async (
    axios: AxiosInstance,
    company: Company,
    userId: string
): Promise<Company> => {
    const { data } = await axios.put(
        `/users/${userId}/company`, company
    );
    return data;
};

