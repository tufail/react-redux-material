import * as types from "./actionCreators";
import { users } from './../config/users';

export const roleReducer = (state = [], actions) => {
    switch(actions.type){
        case types.LOGIN_HANDLER:
            users.forEach(el=>{
                if(el.loginName === actions.loginName && el.password === actions.password) {
                    state = el.access;
                    sessionStorage.setItem('UserAccess', JSON.stringify(state));
                }
            })
            return state;
        case types.LOGOUT_HANDLER:
            state = []
            sessionStorage.clear();
        return state;
        case types.LOGIN_START:
            const value = JSON.parse(sessionStorage.getItem('UserAccess'));
            if(value)
                state=value
        return state;
        default:
            return state;
    }
}