import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { DELETE_USER } from '../../constants/mutationKeys';
import { deleteCurrentUser } from '../../services/UserService'

export default function useDeleteCurrentUserMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, void>(
        DELETE_USER,
        () => deleteCurrentUser(axios),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
