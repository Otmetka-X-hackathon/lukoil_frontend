import React from 'react';
import { useAuth } from '../hook/useAuth';

const HomePage = () => {
  const { user } = useAuth();
  return <div>HomePage</div>;
};

export default HomePage;
