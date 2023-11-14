import {Text} from '../../../UI/Text';
import style from './NotFound.module.css';

export const NotFound = () => (
  <Text className={style.description} As='h2' tsize={24} dsize={26}>
    Упс, данная страница не существует :(
  </Text>
);
