import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Header />
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
