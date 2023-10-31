import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const usePosts = () => {
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
        throw new Error(response.status);
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
