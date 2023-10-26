import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostDate from './PostDate';

export const Post = ({postData}) => {
  const {
    id,
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created,
  } = postData;
  return (
    <li className={style.post}>
      <PostImage thumbnail={thumbnail} />
      <PostContent id={id} title={title} author={author} markdown={markdown} />
      <PostRating ups={ups} />
      <PostDate created={created} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
