import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store';

import App from 'components/App';

import 'normalize.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>
);
