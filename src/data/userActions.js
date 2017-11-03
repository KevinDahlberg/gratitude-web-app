import fetch from 'isomorphic-fetch'

const AUTH_USER = 'AUTH_USER'

const initialState = {
        user: '',
        isLoggedIn: false
    }
    /** Actions **/

export function authUser (loggedIn) {
  return {type: AUTH_USER, isLoggedIn: loggedIn}
}

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
        default:
            return state
    }
}

export default userReducer