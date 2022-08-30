import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakecontainer from './components/HooksCakecontainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakecontainer/>
      </div>
    </Provider>
  );
}

export default App;
