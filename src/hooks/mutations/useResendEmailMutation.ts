import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { RESEND_EMAIL } from '../../constants/mutationKeys';
import { resendEmail } from "../../services/RegistrationService";
import { ResendEmail } from "src/interface/ResendEmail";
import { useHistory } from "react-router-dom";

export default function useResendEmailMutation() {
    const { axios } = useAxiosInstance();
    const location = useHistory();

    return useMutation<string, AxiosError, ResendEmail>(
        RESEND_EMAIL,
        (email) => resendEmail(axios, email),
        {
            onSuccess: () => {
                location.push("/")
            },
        }
    );
}
