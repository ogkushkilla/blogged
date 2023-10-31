import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../store';

export const useCommentsData = (postId) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 401) {
        dispatch(updateToken(token));
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
