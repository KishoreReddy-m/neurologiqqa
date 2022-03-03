import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { DELETE_USER_AVATAR } from '../../constants/mutationKeys';
import { deleteUserAvatar } from './../../services/UserService'

export default function useDeleteUserAvatarMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, File>(
        DELETE_USER_AVATAR,
        (file) => deleteUserAvatar(axios),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
