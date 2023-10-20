import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogoutShow, setIsLogoutShow] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then((response) => {
      if (response.status === 401) {
        delToken();
      }
      return response.json();
    }).then(({name, icon_img: iconImg}) => {
      const img = iconImg.replace(/\?.*$/, '');

      setAuth({name, img});
    }).catch((err) => {
      console.error(err);
      setAuth({});
    });
  }, [token]);

  return (
    <div className={style.container}>
      {
        auth.name ? (
          <div className={style.account}>
            <button
              className={style.loginButton}
              onClick={() => {
                isLogoutShow ?
                setIsLogoutShow(false) :
                setIsLogoutShow(true);
              }}
            >
              <img
                className={style.img}
                src={auth.img}
                title={auth.name}
                alt={`Аватар ${auth.name}`}
              />
              <Text className={style.name} dsize={12}>{auth.name}</Text>
            </button>
            {
              isLogoutShow &&
              <a href={location.origin} className={style.logout}
                onClick={delToken}>
                Выйти
              </a>
            }
          </div>
        ) : (
          <Text As='a' href={urlAuth} className={style.authLink}>
            <LoginIcon className={style.svg} />
          </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = ({
  token: PropTypes.string,
  delToken: PropTypes.func,
});
