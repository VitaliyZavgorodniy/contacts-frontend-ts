import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store';

import App from 'components/App';

import 'index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// goitvitaliy@mail.com
// qwerty12345

root.render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook/">
  {/* <BrowserRouter> */}
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
