import style from './PostRating.module.css';
import PropTypes from 'prop-types';

export const PostRating = ({data}) => {
  console.log();
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг' />
      <p className={style.ups}>{data.ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг' />
    </div>
  );
};

PostRating.propTypes = {
  data: PropTypes.object,
};
