import {useContext, useRef, useState} from 'react';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const [isFormShow, setIsFormShow] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(true);
  const textareaRef = useRef(null);

  const handleClick = () => {
    setIsFormShow(true);
    setIsButtonShow(false);
    if (isFormShow) {
      textareaRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
    setIsFormShow(false);
    setIsButtonShow(true);
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
        <textarea className={style.textarea} ref={textareaRef}></textarea>
        <button className={style.btn}>Отправить</button>
      </form>}
    </>
  );
};
