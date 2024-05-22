/* eslint-disable no-unused-vars */
function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return (dispatch, getState) => {
    console.log("logout success action");
    dispatch({ type: "LOGOUT" });
  };
}

export const authenticateAction = { login, logout };
