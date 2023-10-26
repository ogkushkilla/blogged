import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const useCommentsData = (postId) => {
  const [comments, setComments] = useState([]);
  const [token] = useToken();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    }).then((json) => {
      const postData = json[0].data.children[0].data;
      const commentsData = json[1].data.children;
      setComments({postData, commentsData});
    }).catch((err) => {
      console.error(err);
      setComments([]);
    });
  }, [token]);

  return [comments];
};