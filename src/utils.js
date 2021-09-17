import { default as alias} from 'axios';
export const apiUrl = 'http://localhost:8080'

const handleUnauthorized = () => {
    localStorage.clear()
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    if(window.location.pathname !== '/login')
    window.location.href = '/login'
}

alias.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error && error.response && error.response.status === 401) {
        handleUnauthorized()
    }
    return Promise.reject(error);

});

export const checkAuthorized = async() => {
    try {
        await axios.get(`${apiUrl}/authenticate/status`);
        return {authenticated:true};
      } catch (err) {
        return { authenticated: false };
      }
}

export const axios = alias;

