import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import PostDate from '../../Main/List/Post/PostDate';
import style from './Comments.module.css';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {
      comments.length ? comments.map((comment) => comment.data.body && (
        <li key={comment.data.id} className={style.item}>
          <Text As='h2' className={style.author} size={18} tsize={22}>
            {comment.data.author}
          </Text>
          <Text As='p' className={style.comment} size={14} tsize={18}>
            {comment.data.body}
          </Text>
          <PostDate created={comment.data.created} />
        </li>
      )) : <li>Нет комментариев</li>
    }
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
