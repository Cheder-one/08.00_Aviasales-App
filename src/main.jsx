import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import initiateStore from './app/store/root/store';

const store = initiateStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
