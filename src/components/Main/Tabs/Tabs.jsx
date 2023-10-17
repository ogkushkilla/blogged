import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignRandomId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomeIcon},
  {value: 'Сохраненные', Icon: PostIcon},
  {value: 'Мои посты', Icon: SaveIcon},
].map(assignRandomId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Меню');
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
        <button className={style.btn}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {selectedMenuItem}
          <ArrowIcon width={15} height={15} />
        </button>
      </div>}

      {(isDropDownOpen || !isDropDown) &&
      <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
        {LIST.map(({value, id, Icon}) => (
          <li className={style.item} key={id}>
            <button className={style.btn}
              onClick={() => {
                setSelectedMenuItem(value);
              }}>
              {value}
              {Icon && <Icon width={30} height={30} />}
            </button>
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
