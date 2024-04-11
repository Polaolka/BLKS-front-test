export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectCurrentUser = state => state.auth.user;
export const selectCurrentUserId = state => state.auth.user._id;