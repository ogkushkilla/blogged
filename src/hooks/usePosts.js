// import {useEffect} from 'react';
import {useSelector} from 'react-redux';
// import {postsRequestAsync} from '../store/posts/postsAction';

export const usePosts = () => {
  // const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postsReducer.posts);
  const status = useSelector(state => state.postsReducer.status);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(postsRequestAsync());
  // }, [token]);

  return [posts, status];
};
