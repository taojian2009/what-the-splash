import {call, take, takeEvery, put} from 'redux-saga/effects'
import {IMAGES} from "../constants";

// worker sage
function* handleImagesLoad() {
    console.log('fetching images from web')
}


function* handleDang() {
    console.log("DANG")
}

// watcher sage
function* rootSage() {
    yield take(IMAGES.LOAD)
    yield call(handleImagesLoad)
    // NOTE: takeEvery is not blocking, which means the watchers are running in parallel.
    yield takeEvery("DANG", handleDang)
}

// watcher saga watches actions dispatched, and then pass it to worker saga.

export default rootSage;
