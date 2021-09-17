import {apiUrl} from '../../../utils'


export const uploadPostUrl = () => {
    return apiUrl + '/protected/post';
};

export const userFeedUrl = () => {
    return apiUrl + '/protected/user/feed';
};

export const logoutUrl = () => {
    return apiUrl + '/authenticate/deleteToken';
};



