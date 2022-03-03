import { useQuery } from 'react-query';
import { GET_USER_DETAILS } from "src/constants/queryKeys";
import { User } from "src/interface/User";
import { getUserById } from "src/services/UserService";
import useAxiosInstance from '../useAxiosInstance';

export default function useGetUserByIdQuery(
    userId: string,
) {
    const { axios } = useAxiosInstance();
    return useQuery<User>(
        [GET_USER_DETAILS, userId],
        async () => getUserById(axios, userId), { enabled: !!userId }
    );
}
