const getUser = (state) => state.auth.user;
const getLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetching = (state) => state.auth.isFetching;
const getToken = (state) => state.auth.token;
const getIsLoadingUser = (state) => state.auth.isLoadingUser;

const authSelectors = {
  getUser,
  getLoggedIn,
  getIsFetching,
  getToken,
  getIsLoadingUser
};

export default authSelectors;
