import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from '../pages/Login';

import RequireAuth from '../hoc/RequireAuth';
import { AuthProvider } from '../hoc/AuthProvider';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/Home';

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
