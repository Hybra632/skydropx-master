import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'skydropx',
    storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();

const store = process.env.REACT_APP_NODE_ENV === 'development'
    ? createStore(pReducer, compose(applyMiddleware(thunkMiddleware, loggerMiddleware), devToolsEnhancer()))
    : createStore(pReducer, applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export { store, persistor };
