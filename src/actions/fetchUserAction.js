import axios from "axios";

const fetchUsersStart = () => ({ type: "FETCH_USERS_START" });
const fetchUsersSuccess = (data) => ({ type: "FETCH_USERS_SUCCESS", data });
const fetchUsersFail = (error) => ({ type: "FETCH_USERS_FAIL", error });

// const fetchUsers = () => (dispatch) => {
//   dispatch(fetchUsersStart());
//   axios.get("https://api.github.com/users?per_page=100")
//     .then(res => {
//       dispatch(fetchUsersSuccess(res.data));
//     })
//     .catch(err => {
//       dispatch(fetchUsersFail(err));
//     });
// }

const fetchUsers = () => {
  return async dispatch => {
    try {
      const reponse = await axios.get("https://api.github.com/users?per_page=100");
      dispatch(fetchUsersSuccess(reponse.data));
    } 
    catch(error) {
      dispatch(fetchUsersFail(error));
    }
  }
}

export default {
  fetchUsers
}