import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { UsersPage } from './pages/UsersPage/UsersPage';

function App() {
  return (
    <div>
      <Routes>
        {
          localStorage.getItem('DataToken')?
          <Route path="/home" element={<UsersPage />} />
          :
          <Route path="/" element={<LoginPage />} />
        }
      </Routes>
    </div>
  );
}

export default App;
