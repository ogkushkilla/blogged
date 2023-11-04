import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (postId) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  dispatch(commentsRequest());

  axios(`${URL_API}/comments/${postId}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  }).then(({data}) => {
    const postData = data[0].data.children[0].data;
    const commentsData = data[1].data.children;
    dispatch(commentsRequestSuccess({postData, commentsData}));
  }).catch((err) => {
    console.error(err.message);
    dispatch(commentsRequestError(err.message));
  });
};
