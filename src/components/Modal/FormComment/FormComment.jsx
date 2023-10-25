import {useEffect, useRef, useState} from 'react';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';

export const FormComment = () => {
  const textareaRef = useRef(null);
  const [isFormShow, setIsFormShow] = useState(false);
  const [isButtonShow, setIsButtonShow] = useState(true);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, [textareaRef]);

  const handleClick = () => {
    setIsFormShow(true);
    setIsButtonShow(false);
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
          Имя авторизованного пользователя
        </Text>
        <textarea className={style.textarea} ref={textareaRef}></textarea>
        <button className={style.btn}>Отправить</button>
      </form>}
    </>
  );
};
