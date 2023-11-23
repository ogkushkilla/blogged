import {useEffect, useRef} from 'react';
import {Preloader} from '../../../UI/Preloader/Preloader';
import style from './List.module.css';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import {clearPosts} from '../../../store/posts/postsSlice';

export const List = () => {
  const posts = useSelector(state => state.postsReducer.posts);
  const status = useSelector(state => state.postsReducer.status);
  const authStatus = useSelector(state => state.authReducer.status);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(clearPosts());
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!endList.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (status !== 'loading') {
          dispatch(postsRequestAsync());
        }
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, status]);

  const authWarning = () => {
    if (authStatus === '') {
      return (
        <li className={style.list}>
          Авторизуйтесь для отображения постов
        </li>
      );
    }
  };

  return (
    <>
      <ul className={style.list}>
        {posts.length > 0 ? (
          <>
            {posts.map((post) =>
              <Post key={post.data.id} postData={post.data} />
            )}
            <li ref={endList} className={style.end}></li>
          </>
        ) : authWarning()}
        {status === 'loading' && <Preloader/>}
      </ul>
      <Outlet />
    </>
  );
};
