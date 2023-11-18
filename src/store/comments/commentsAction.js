import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (postId, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).then(({data}) => {
      const postData = data[0].data.children[0].data;
      const commentsData = data[1].data.children;
      return {postData, commentsData};
    }).catch((error) => error.message);
  },
);
