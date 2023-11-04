import {combineReducers, createStore, applyMiddleware} from 'redux';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {commentsReducer} from './comments/commentsReducer';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postsReducer,
  commentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
