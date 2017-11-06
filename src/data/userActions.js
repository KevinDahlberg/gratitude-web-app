import fetch from 'isomorphic-fetch'

const AUTH_USER = 'AUTH_USER'
const REG_USER = 'REG_USER'

const initialState = {
        user: '',
        isLoggedIn: false,
        loginStatus: ''
}

/** Actions **/

function authUser (loggedIn, status) {
  return {type: AUTH_USER, isLoggedIn: loggedIn, loginStatus: status}
}

function regUser () {
    return {type: REG_USER}
}

/** Action Functions */
export function loginUser(user) {
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('/user/loginUser', init)
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                dispatch(authUser(true, response.status))     
            } else {
                dispatch(authUser(false, response.status))
            }
        })
    }
}

export function registerUser(user) {
    const init = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('/user/registerUser', init)
        .then(function(response) { console.log(response); })
        .then(dispatch(regUser()))
    }
}
    

function shouldAuthenticateUser(state) {
    if (state.isAuthenticated) {
        false
    } else {
        true
    }
}

function authenticateUser() {
    const init = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }
    fetch('/user/auth', init)
        .then(function(response) {
            console.log(response);
        })
}

export function verifyAuthenticateUser() {
    return (dispatch, getState) => {
        if (shouldAuthenticateUser(getState())) {
            dispatch(authenticateUser())
        } else {
            return
        }
    }
}

/** Reducer **/

function userReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                loginStatus: action.loginStatus
            }
        case REG_USER:
            return state
        default:
            return state
    }
}

export default userReducer