import {Text} from '../../../../../UI/Text';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';

export const PostRating = ({data}) => {
  console.log();
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг' />
      <Text
        As='p'
        tsize={16}
        dsize={18}
        className={style.ups}
      >
        {data.ups}
      </Text>
      <button className={style.down} aria-label='Понизить рейтинг' />
    </div>
  );
};

PostRating.propTypes = {
  data: PropTypes.object,
};
