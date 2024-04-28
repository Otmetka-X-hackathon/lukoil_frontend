import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import AuthService from '../services/AuthService';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const code = form.code.value;

    const { data } = await AuthService.login(phone, code);

    signIn(data.object, () => navigate(fromPage, { replace: true }));
  };

  if (localStorage.getItem('token')) {
    return <Navigate to='/' state={{ from: location }} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Телефон: <input name='phone' />
        </label>
        <label>
          Код: <input name='code' />
        </label>
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
};

export default Login;
