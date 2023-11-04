import PuffLoader from 'react-spinners/PuffLoader';
import style from './Preloader.module.css';

export const Preloader = () => (
  <PuffLoader color='#cc6633' className={style.loader} size={30} />
);
