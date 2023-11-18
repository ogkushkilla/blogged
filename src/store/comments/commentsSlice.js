import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  status: '',
  postData: {},
  commentsData: {},
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.error = '';
      state.status = 'loaded';
      state.postData = action.payload.postData;
      state.commentsData = action.payload.commentsData;
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    }
  }
});

export default commentsSlice.reducer;
