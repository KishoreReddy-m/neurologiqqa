import { useQuery } from 'react-query';
import { GET_USERS } from "src/constants/queryKeys";
import { PageData } from "src/interface/PageData";
import { getUsers } from "src/services/UserService";
import useAxiosInstance from '../useAxiosInstance';

export default function useGetUsersQuery(
    pageIndex: number,
) {
    const { axios } = useAxiosInstance();
    return useQuery<PageData>(
        [GET_USERS],
        async () => getUsers(axios, pageIndex)
    );
}
