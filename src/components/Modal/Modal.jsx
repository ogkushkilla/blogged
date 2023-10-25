import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import PropTypes from 'prop-types';
import FormComment from '../Modal/FormComment';
import Comments from '../Modal/Comments';
import style from './Modal.module.css';
import Markdown from 'markdown-to-jsx';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);
  const [data] = useCommentsData(id);
  const post = data.postData;
  const comments = data.commentsData;

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current ||
        target === closeRef.current) {
      closeModal();
    }
  };

  const handleKeyUp = (e) => {
    const keyCode = e.code;
    if (keyCode === 'Escape') {
      closeModal();
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
    (post ?
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>
          {post.title}
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
            {post.selftext}
          </Markdown>
        </div>

        <p className={style.author}>
          {post.author}
        </p>

        <FormComment />

        <Comments comments={comments} />

        <button className={style.close} ref={closeRef}></button>
      </div>
    </div> :
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>Загрузка...</div>
    </div>),
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
