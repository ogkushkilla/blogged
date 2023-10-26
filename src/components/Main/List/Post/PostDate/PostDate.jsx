import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export function PostDate({created}) {
  console.log();
  return (
    created &&
      <time className={style.date} dateTime={created}>
        {formatDate(created)}
      </time>
  );
}

PostDate.propTypes = {
  created: PropTypes.number,
};
