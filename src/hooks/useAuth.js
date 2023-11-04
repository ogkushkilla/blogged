import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  authLogout, authRequestAsync,
} from '../store/auth/authAction';

export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const status = useSelector(state => state.authReducer.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, status, clearAuth];
};
