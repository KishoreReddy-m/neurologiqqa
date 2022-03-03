import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { UPDATE_USER_INFORMATION } from '../../constants/mutationKeys';
import { updateUserInformation } from "src/services/UserService";
import { BaseInformation } from "src/interface/User";

export default function useUpdateUserInformationMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, BaseInformation>(
        UPDATE_USER_INFORMATION,
        (baseInformation) => updateUserInformation(axios, baseInformation),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
