import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import PropTypes from 'prop-types';
import FormComment from '../Modal/FormComment';
import Comments from '../Modal/Comments';
import style from './Modal.module.css';
import Markdown from 'markdown-to-jsx';
import {Preloader} from '../../UI/Preloader/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const closeRef = useRef(null);
  const [postData, commentsData, status, error] = useCommentsData(id);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current ||
        target === closeRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handleKeyUp = (e) => {
    const keyCode = e.code;
    if (keyCode === 'Escape') {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('click', handleClick);
      document.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader />}
        {status === 'error' && error}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>
              {postData.title}
            </h2>

            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {postData.selftext}
              </Markdown>
            </div>

            <p className={style.author}>
              {postData.author}
            </p>

            <FormComment />

            <Comments comments={commentsData} />

            <button className={style.close} ref={closeRef}></button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
