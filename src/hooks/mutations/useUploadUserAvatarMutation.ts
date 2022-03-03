import useAxiosInstance from '../useAxiosInstance';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { UPLOAD_USER_AVATAR } from '../../constants/mutationKeys';
import { uploadUserAvatar } from "src/services/UserService";

export default function useUploadUserAvatarMutation() {
    const { axios } = useAxiosInstance();

    return useMutation<string, AxiosError, File>(
        UPLOAD_USER_AVATAR,
        (file) => uploadUserAvatar(axios, file),
        {
            onSuccess: (data: string) => {
                console.log(data);
            },
        }
    );
}
