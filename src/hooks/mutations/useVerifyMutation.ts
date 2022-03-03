import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { LOGIN } from '../../constants/mutationKeys';
import { emailVerify } from "../../services/RegistrationService";
import { EmailVerify } from "src/interface/EmailVerify";

export default function useEmailVerifyMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, EmailVerify>(
        LOGIN,
        (user) => emailVerify(axios, user),
        {
            onSuccess: () => {
                // redirect to landing page
            },
        }
    );
}
