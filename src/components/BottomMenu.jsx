import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const BottomMenu = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  return (
    <div>
      <button
        onClick={() => signOut(() => navigate('/login', { replace: true }))}
      >
        Выйти
      </button>
      <button onClick={() => navigate('/')}>QR</button>
      <button onClick={() => navigate('/')}>QR</button>
    </div>
  );
};

export default BottomMenu;
