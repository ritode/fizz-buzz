export const loginRequest = (credentials) => ({
  type: "LOGIN_REQUEST",
  payload: credentials,
});

export const logout = () => ({
  type: "LOGOUT",
});
