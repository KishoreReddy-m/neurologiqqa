
import axios from 'axios';
import { useMemo } from 'react';
import { useHistory } from "react-router-dom";

export default function useAxiosInstance() {
    var history = useHistory();
    const source = axios.CancelToken.source();

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: `https://api.neurologiq.com/api/v1`,
            cancelToken: source.token,
        });
        instance.interceptors.request.use(
            (request: any) => {
                const token = localStorage.getItem('token');
                if (token) {
                    request.headers['Authorization'] = `Bearer ${token}`;
                }
                return request;
            },
            (error) => {
                if (error.statusCode === 401) {
                    history.push('/')
                }

                return Promise.reject(error);
            }
        );
        return instance;
    }, [history, source.token]);

    return { axios: axiosInstance, cancel: source.cancel };
}
