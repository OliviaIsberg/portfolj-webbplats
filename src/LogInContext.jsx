import { createContext, useState, useEffect, useContext } from 'react';
import { FakeDatabaseContext } from './FakeDatabaseContext';

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
  const fakeDatabaseContext = useContext(FakeDatabaseContext);
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      setLoggedInUser(true);
    }
  }, []);

  function loginUser(email, password) {
    const user = fakeDatabaseContext.loginUser(email, password);
    if (!user) {
      throw new Error('Användare eller lösenord är felaktigt');
    }

    setUser(user);
    setLoggedInUser(true);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  function logoutUser() {
    localStorage.removeItem('user');
    setUser(null);
    setLoggedInUser(false);
  }

  return (
    <LogInContext.Provider
      value={{
        user,
        loggedInUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;
