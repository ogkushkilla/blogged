import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (postId) => {
  const token = useSelector(state => state.tokenReducer.token);
  const comments = useSelector(state => state.commentsReducer.data);
  const status = useSelector(state => state.commentsReducer.status);
  const error = useSelector(state => state.commentsReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(postId));
  }, [token]);

  return [comments, status, error];
};
