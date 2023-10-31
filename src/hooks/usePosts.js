import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../store';

export const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then((response) => {
      if (response.status === 401) {
        dispatch(updateToken(token));
      }
      return response.json();
    }).then((json) => {
      setPosts(json.data.children);
    }).catch((err) => {
      console.error(err);
      setPosts([]);
    });
  }, [token]);

  return [posts];
};
