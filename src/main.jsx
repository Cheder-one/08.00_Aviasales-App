import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/index.scss';
import createStore from './app/store/store';
import App from './App';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
