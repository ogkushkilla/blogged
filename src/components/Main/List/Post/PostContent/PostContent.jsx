import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Text} from '../../../../../UI/Text';

export const PostContent = ({data}) => {
  console.log();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href="#post"
        >
          {data.title}
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
        {data.author}
      </Text>
      <button className={style.delete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

PostContent.propTypes = {
  data: PropTypes.object,
};
