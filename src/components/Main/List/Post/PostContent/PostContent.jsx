import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const PostContent = ({data}) => {
  console.log();
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href="#post">{data.title}</a>
      </h2>
      <a className={style.linkAuthor} href="#author">{data.author}</a>
      <button className={style.delete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

PostContent.propTypes = {
  data: PropTypes.object,
};
