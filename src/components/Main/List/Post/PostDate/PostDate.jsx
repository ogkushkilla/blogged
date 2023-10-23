import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export function PostDate({data}) {
  console.log();
  return (
    <time className={style.date} dateTime={data.created}>
      {formatDate(data.created)}
    </time>
  );
}

PostDate.propTypes = {
  data: PropTypes.object,
};
