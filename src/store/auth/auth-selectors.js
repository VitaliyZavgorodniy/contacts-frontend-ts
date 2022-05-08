const getUser = (state) => state.auth.user;
const getLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetching = (state) => state.auth.isFetching;
const getToken = (state) => state.auth.token;

const authSelectors = {
  getUser,
  getLoggedIn,
  getIsFetching,
  getToken,
};

export default authSelectors;
