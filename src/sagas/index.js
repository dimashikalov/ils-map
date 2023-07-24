import { call, put, takeEvery } from "redux-saga/effects";
import ApiService from "../services/api";
import { setSelectedWay, setSelectedWayPolyline } from "../store/map/mapSlice";

function* fetchWaySelection(action) {
  yield put(setSelectedWay(action.payload));
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
  console.log("res", responce);
  yield put(
    setSelectedWayPolyline(responce.data.routes[0].geometry.coordinates)
  );
}

function* waitFetchWaySelection() {
  yield takeEvery("saga/setSelectedWay", fetchWaySelection);
}

export default waitFetchWaySelection;
