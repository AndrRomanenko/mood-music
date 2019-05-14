import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducer from './reducer';

const browserHistory = createBrowserHistory({ basename: '/' });

const router = routerMiddleware(browserHistory);

const store = createStore(reducer, applyMiddleware(logger, router));

export default store;
