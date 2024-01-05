import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/index.scss';
import App from './app/components/App';
import createStore from './app/store/store';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
