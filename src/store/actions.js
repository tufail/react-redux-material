import * as types from './actionCreators';

export const login = (loginName, password) => {
    return{
        type: types.LOGIN_HANDLER,
        loginName,
        password
    }
}
export const logout = () => {
    return{
        type: types.LOGOUT_HANDLER
    }
}
export const loginStart = () => {
    return{
        type: types.LOGIN_START
    }
}