import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LoginPage';

const App = () => (
  <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default App;
