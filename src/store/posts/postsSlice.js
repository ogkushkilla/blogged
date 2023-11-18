import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  status: '',
  posts: [],
  error: '',
  page: '',
  after: '',
  isLast: false,
  isPageChanged: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.error = '';
      state.page = action.payload.page;
      state.isPageChanged = action.payload.isPageChanged;
      state.posts = state.isPageChanged ?
        action.payload.posts.children :
        [...state.posts, ...action.payload.posts.children];
      state.after = action.payload.posts.after;
      state.isLast = !action.payload.posts.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
