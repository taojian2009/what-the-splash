import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers";
import createSageMiddleware from 'redux-saga'
import rootSage from "../sage";

const configureStore = () => {
    const sagaMiddleware = createSageMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSage)
    store.dispatch({type: 'LOGIN'})
    // LOGOUT BEFORE LOGIN DOES NOT MAKE SENSE.
    store.dispatch({type: 'LOGOUT'})
    return store
}

export default configureStore;
