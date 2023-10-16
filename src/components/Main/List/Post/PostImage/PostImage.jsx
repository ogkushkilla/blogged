import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({data}) => {
  console.log();
  return (
    <img className={style.img} src={notphoto} alt={data.title} />
  );
};

PostImage.propTypes = {
  data: PropTypes.object,
};
