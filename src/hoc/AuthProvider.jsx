import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, cb) => {
    setUser(newUser);
    localStorage.setItem('token', newUser.token);
    cb();
  };

  const signOut = (cb) => {
    setUser(null);
    localStorage.removeItem('token');
    cb();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
