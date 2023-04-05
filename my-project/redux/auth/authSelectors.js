export const selectProfileImg = (state) => state.auth.profileImg;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserName = (state)=> state.auth.name;
export const selectUserId = (state) => state.auth.userId;
export const selectUser = ({ auth }) => auth;
