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


function* byebyeSaga() {
    console.log('bye bye saga')
}

// watcher sage
function* rootSage() {
    yield take('LOGIN')
    yield call(workerSaga)
    yield take('LOGOUT')
    yield call(byebyeSaga)
}

// watcher saga => listen to actions => worker saga





export default rootSage;
