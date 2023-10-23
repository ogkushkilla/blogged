import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [token] = useToken();

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
