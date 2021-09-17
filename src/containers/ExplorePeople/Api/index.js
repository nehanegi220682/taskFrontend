import {apiUrl} from '../../../utils'


export const fetchPeopleUrl = () => {
    return apiUrl + '/protected/user';
};

export const followingUrl = () => {
    return apiUrl + '/protected/following';
};

