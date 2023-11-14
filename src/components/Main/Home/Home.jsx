import {Text} from '../../../UI/Text';
import style from './Home.module.css';

export const Home = () => (
  <div className={style.container}>
    <Text className={style.title} As='h2' tsize={24} dsize={26}>
      Стартовая страница
    </Text>
    <Text className={style.welcome} As='p' tsize={22} dsize={22}>
      Добро пожаловать!
    </Text>
    <Text className={style.subtitle} As='p' tsize={18} dsize={20}>
      Выберите категорию
    </Text>
  </div>
);
