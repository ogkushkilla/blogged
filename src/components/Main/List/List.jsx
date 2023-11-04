import {Preloader} from '../../../UI/Preloader/Preloader';
import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, status] = usePosts();
  return (
    <ul className={style.list}>
      {status === 'loading' && <Preloader/>}
      {status === 'loaded' && (
        posts.map(post =>
          <Post key={post.data.id} postData={post.data} />
        )
      )}
      {status === 'error' && <li>Нет популярных постов</li>}
    </ul>
  );
};
