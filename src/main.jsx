import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/index.scss';
import App from './App';
import initiateStore from './app/store/root/store';

const store = initiateStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
