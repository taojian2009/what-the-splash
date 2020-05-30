import {call, take, takeEvery, put} from 'redux-saga/effects'

// worker sage

function* workerSaga() {
    console.log('worker, hello')
    console.log(put({type: "ACTION_FROM_WORKER", payload: {
            loginUser: {
                userName: 'zhang3',
                id: 12,
                age: 29
            }
        }}));
    yield put({type: "ACTION_FROM_WORKER1"})
}


// watcher sage
function* rootSage() {
    console.log('hey there ')
    yield takeEvery('HELLO', workerSaga)
}

// watcher saga => listen to actions => worker saga





export default rootSage;
