import { call, put, takeEvery } from "redux-saga/effects";
import ApiService from "../services/api";
import {
  setSelectedWay,
  setSelectedWayPolyline,
  setSelectedWayPolylineError,
} from "../store/map/mapSlice";

function* fetchWaySelection(action) {
  yield put(setSelectedWay(action.payload));
  try {
    const selectedWay = action.payload;
    const startPoint = selectedWay.startPoint;
    const checkPoint = selectedWay.checkPoint;
    const endPoint = selectedWay.endPoint;
    const responce = yield call(
      ApiService.fetchPolyline,
      startPoint,
      checkPoint,
      endPoint
    );
    yield put(
      setSelectedWayPolyline(responce.data.routes[0].geometry.coordinates)
    );
  } catch (error) {
    yield put(setSelectedWayPolylineError(error));
  }
}

function* waitFetchWaySelection() {
  yield takeEvery("saga/setSelectedWay", fetchWaySelection);
}

export default waitFetchWaySelection;
