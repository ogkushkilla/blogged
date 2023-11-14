import {useEffect, useRef, useState} from 'react';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = () => {
  const value = useSelector((state) => state.commentReducer.comment);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authReducer.auth);
  const [isFormShow, setIsFormShow] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(true);
  const textareaRef = useRef(null);

  const handleClick = () => {
    setIsFormShow(true);
    setIsButtonShow(false);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    if (isFormShow) {
      textareaRef.current.focus();
    }
  }, [isFormShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };

  return (
    <>
      {isButtonShow &&
      <button className={style.btn} onClick={handleClick}>
        Написать комментарий
      </button>}
      {isFormShow &&
      <form className={style.form} onSubmit={handleSubmit}>
        <Text As='h3' size={14} tsize={18}>
          {auth.name}
        </Text>
        <textarea
          className={style.textarea}
          ref={textareaRef}
          value={value}
          onChange={handleChange} />
        <button className={style.btn}>Отправить</button>
      </form>}
    </>
  );
};
