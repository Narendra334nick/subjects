import './App.css';
import MainLayout from './Container/MainLayout/index';
import store from './Utils/Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </div>
  );
}

export default App;
