import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({thumbnail, title}) => {
  const thumbnailSource = thumbnail.includes('.jpg') ?
    thumbnail :
    notphoto;
  return (
    <img className={style.img} src={thumbnailSource} alt={title} />
  );
};

PostImage.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
