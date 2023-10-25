import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostDate from './PostDate';

export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    created,
  } = postData;
  return (
    <li className={style.post}>
      <PostImage thumbnail={thumbnail} />
      <PostContent title={title} author={author} />
      <PostRating ups={ups} />
      <PostDate created={created} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
