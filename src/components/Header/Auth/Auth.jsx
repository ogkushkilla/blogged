import {useContext, useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isLogoutShow, setIsLogoutShow] = useState(false);
  const {auth, clearAuth} = useContext(authContext);
  const logOut = () => {
    delToken();
    clearAuth();
  };

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
              <button className={style.logout}
                onClick={logOut}>
                Выйти
              </button>
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
