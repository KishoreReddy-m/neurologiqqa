import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { LOGIN } from '../../constants/mutationKeys';
import { registerUser } from "../../services/RegistrationService";
import { Register } from "src/interface/Register";

export default function useUserRegistrationMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, Register>(
        LOGIN,
        (user) => registerUser(axios, user),
        {
            onSuccess: () => {
                // redirect to landing page
            },
        }
    );
}
