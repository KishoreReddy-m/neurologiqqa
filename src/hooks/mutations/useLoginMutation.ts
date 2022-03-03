import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { LOGIN } from '../../constants/mutationKeys';
import { userLogin } from "../../services/RegistrationService";
import { Login } from "src/interface/Login";
import { useHistory } from "react-router-dom";

export default function useLoginMutation() {
    const { axios } = useAxiosInstance();
    const location = useHistory();

    return useMutation<string, AxiosError, Login>(
        LOGIN,
        (login) => userLogin(axios, login),
        {
            onSuccess: (response: any) => {
                localStorage.setItem('token', response.access_token)
                location.push("/app/project")
            },
        }
    );
}
