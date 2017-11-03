import fetch from 'isomorphic-fetch'

const AUTH_USER = 'AUTH_USER'
const REG_USER = 'REG_USER'

const initialState = {
        user: '',
        isLoggedIn: false
}

/** Actions **/

function authUser (loggedIn) {
  return {type: AUTH_USER, isLoggedIn: loggedIn}
}

function regUser () {
    return {type: REG_USER}
}

/** Action Functions */
export function loginUser(user) {
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('/user/loginUser', init)
        .then(response => {
            if (response.status === 200) {
                dispatch(authUser(true))     
            } else {
                dispatch(authUser(false))
            }
        })
    }
}

export function registerUser(user) {
    const init = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('/user/registerUser', init)
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
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        case REG_USER:
            return state
        default:
            return state
    }
}

export default userReducer