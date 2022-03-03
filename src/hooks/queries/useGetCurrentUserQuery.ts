import { useQuery } from 'react-query';
import { User } from "src/interface/User";
import { getCurrentUser } from "src/services/UserService";
import { GET_CURRENT_USER } from '../../constants/queryKeys';
import useAxiosInstance from '../useAxiosInstance';

export default function useGetCurrentUserQuery(
) {
    const { axios } = useAxiosInstance();
    return useQuery<User>(
        [GET_CURRENT_USER],
        async () => getCurrentUser(axios)
    );
}
