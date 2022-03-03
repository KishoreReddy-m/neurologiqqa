import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { DELETE_USER_AVATAR } from '../../constants/mutationKeys';
import { updateCompany } from '../../services/UserService'
import { Company } from "src/interface/Company";

export default function useUpdateCompanyMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, Company>(
        DELETE_USER_AVATAR,
        (company) => updateCompany(axios, company),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
