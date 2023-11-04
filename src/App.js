import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
