import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postContext} from '../../../context/postContext';

export const List = () => {
  const [posts] = useContext(postContext);
  return (
    <ul className={style.list}>
      {
        posts ? (
          posts.map(post =>
            <Post key={post.data.id} postData={post.data} />
          )
        ) : <li>Нет популярных постов</li>
      }
    </ul>
  );
};
