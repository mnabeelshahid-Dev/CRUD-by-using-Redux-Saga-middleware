import { put, takeLatest, all } from "redux-saga/effects";
import { saveUser, deleteUser, updateUser } from "../actions/index";

//create user
export function* createUserSaga(action) {
  try {
    const obj = action.payload;
    yield put(saveUser(obj));
  } catch (error) {
    yield put({ type: "NAME_REQUEST_FAILED", error });
  }
}
// delete user
export function* deleteUserSaga(action) {
  try {
    const id = action.payload;
    yield put(deleteUser(id));
  } catch (error) {
    yield put({ type: "NAME_REQUEST_FAILED", error });
  }
}
//update user
export function* updateUserSaga(action) {
  try {
    yield put(updateUser(action.payload));
  } catch (error) {
    yield put({ type: "NAME_REQUEST_FAILED", error });
  }
}

export function* actionWatcher() {
  yield takeLatest("CREATE_USER", createUserSaga);
  yield takeLatest("DELETE_USER", deleteUserSaga);
  yield takeLatest("UPDATE_USER", updateUserSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
