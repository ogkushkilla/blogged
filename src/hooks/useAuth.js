import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken, updateToken} from '../store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then((response) => {
      if (response.status === 401) {
        dispatch(updateToken(token));
      }
      return response.json();
    }).then(({name, icon_img: iconImg}) => {
      const img = iconImg.replace(/\?.*$/, '');

      setAuth({name, img});
    }).catch((err) => {
      console.error(err);
      dispatch(deleteToken(token));
      setAuth({});
    });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
