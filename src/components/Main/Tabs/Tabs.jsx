import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignRandomId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {Text} from '../../../UI/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: '/'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignRandomId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Главная');
  const navigate = useNavigate();
  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && <div className={style.wrapperBtn}>
        <Text
          As='button'
          tsize={16}
          dsize={18}
          className={style.btn}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {selectedMenuItem}
          <ArrowIcon width={15} height={15} />
        </Text>
      </div>}

      {(isDropDownOpen || !isDropDown) &&
      <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
        {LIST.map(({value, link, id, Icon}) => (
          <li className={style.item} key={id}>
            <Text
              As='button'
              tsize={16}
              dsize={18}
              className={style.btn}
              onClick={() => {
                setSelectedMenuItem(value);
                if (value === 'Главная') {
                  navigate(`/`);
                } else {
                  navigate(`/category/${link}`);
                }
              }}
            >
              {value}
              {Icon && <Icon width={30} height={30} />}
            </Text>
          </li>
        ))}
      </ul>}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
