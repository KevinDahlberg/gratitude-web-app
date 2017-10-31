import fetch from 'isomorphic-fetch'

const AUTH_USER = 'AUTH_USER'

const initialState = {
  user: '',
  isAuthenticated: false
}
/** Actions **/

// function authUser () {
//   return (type: AUTH_USER)
// }

function shouldAuthenticateUser(state) {
  if (state.isAuthenticated){
    false
  } else {
    true
  }
}

function authenticateUser() {
  const init = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }
  fetch('/user/auth', init)
  .then(function(response) {
    console.log(response);
  })
}

export function verifyAuthenticateUser() {
  return (dispatch, getState) => {
    if (shouldAuthenticateUser(getState())){
      dispatch (authenticateUser())
    } else {
      return
    }
  }
}

/** Reducer **/

function userReducer (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: false
      }
  }
}

export default userReducer
