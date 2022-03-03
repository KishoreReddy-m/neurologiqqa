import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { UPDATE_USER_INFORMATION_BY_ID } from '../../constants/mutationKeys';
import { updateUserInformationById } from "src/services/UserService";
import { BaseInformation } from "src/interface/User";

export default function useUpdateUserInformationByIdMutation(userId: string) {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, BaseInformation>(
        [UPDATE_USER_INFORMATION_BY_ID, userId],
        (baseInformation) => updateUserInformationById(axios, baseInformation, userId),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
