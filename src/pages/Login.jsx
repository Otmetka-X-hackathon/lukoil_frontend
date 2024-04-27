import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

    const data = AuthService.login(phone);

    console.log(data);

    signIn(data, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Телефон: <input name='phone' />
        </label>
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
};

export default Login;
