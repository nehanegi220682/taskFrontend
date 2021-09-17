import {apiUrl} from '../../../utils'


export const SignupUrl = () => {
    return apiUrl + '/user';
};

export const LoginUrl = () => {
    return apiUrl + '/authenticate/getToken';
};