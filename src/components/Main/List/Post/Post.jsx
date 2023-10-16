import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostDate from './PostDate';

export const Post = ({postData}) => {
  console.log();
  return (
    <li className={style.post}>
      <PostImage data={postData} />
      <PostContent data={postData} />
      <PostRating data={postData} />
      <PostDate data={postData} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
