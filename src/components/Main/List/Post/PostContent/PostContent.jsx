import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Text} from '../../../../../UI/Text';
import Modal from '../../../../Modal';
import {useState} from 'react';

export const PostContent = ({id, title, author}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href="#post"
          onClick={() =>
            setIsModalOpen(true)
          }
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      <button className={style.delete}>
        <DeleteIcon />
      </button>
      {
        isModalOpen &&
          <Modal
            id={id}
            closeModal={() =>
              setIsModalOpen(false)
            }
          />
      }
    </div>
  );
};

PostContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
