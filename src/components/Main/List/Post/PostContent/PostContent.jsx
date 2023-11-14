import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const PostContent = ({id, title, author}) => {
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost}
          to={`/category/${page}/post/${id}`}>
          <Text size={18} tsize={24} className={style.linkPost}>
            {title}
          </Text>
        </Link>
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
    </div>
  );
};

PostContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
