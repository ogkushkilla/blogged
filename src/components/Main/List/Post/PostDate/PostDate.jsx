import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const PostDate = ({data}) => {
  console.log();
  return (
    <time className={style.date} dateTime={data.date}>
      {formatDate(data.date)}
    </time>
  );
};

PostDate.propTypes = {
  data: PropTypes.object,
};
