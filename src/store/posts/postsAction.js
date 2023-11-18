import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const token = getState().tokenReducer.token;
    const isLast = getState().postsReducer.isLast;
    let page = getState().postsReducer.page;
    let after;
    let isPageChanged;

    if (!token || isLast) return;

    if (newPage) {
      page = newPage;
      after = '';
      isPageChanged = true;
    } else {
      after = getState().postsReducer.after;
      isPageChanged = false;
    }

    return axios(`${URL_API}/${page}?limit=10${after ?
      `&after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(({data}) => {
      const posts = data.data;
      return {posts, page, isPageChanged};
    }).catch((error) => error.message);
  }
);

