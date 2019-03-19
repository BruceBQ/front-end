import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { logger } from 'redux-logger'
import { createLogger } from 'redux-logger'
import  rootSaga  from '../sagas'
import  watchSignIn  from '../sagas/saga_authentication'

import reducer_root from '../reducers'

// const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const preloadedState = { }

const logger = createLogger({
	collapsed: true
})

const store = createStore(
	reducer_root,
	preloadedState,
	composeEnhancers(
		applyMiddleware( sagaMiddleware, logger )
	),
)

sagaMiddleware.run(rootSaga)


export default store