export function _createUser(payload) {
  return {
    type: "CREATE_USER",
    payload
  };
}
export function saveUser(payload) {
  return {
    type: "CREATE_USER_SUCCESS",
    payload
  };
}

export function _updateUser(payload) {
  return {
    type: "UPDATE_USER",
    payload
  };
}
export function updateUser(payload) {
  return {
    type: "UPDATE_USER_SUCCESS",
    payload
  };
}

export function _deleteData(payload) {
  return {
    type: "DELETE_USER",
    payload
  };
}
export function deleteUser(payload) {
  return {
    type: "DELETE_USER_SUCCESS",
    payload
  };
}
