import { createContext } from 'react';

export const FakeDatabaseContext = createContext();

const FakeDatabaseContextProvider = ({ children }) => {
  function registerUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) ?? [];
    const isAvailable = !users.some(
      (x) => x.email.toLowerCase() == user.email.toLowerCase()
    );
    if (!isAvailable) {
      throw new Error('Användare med angiven epostadress existerar redan');
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) ?? [];
    const user = users.find(
      (user) =>
        user.email.toLowerCase() == email.toLowerCase() &&
        user.password == password
    );
    return user
      ? {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }
      : null;
  }

  return (
    <FakeDatabaseContext.Provider
      value={{
        registerUser,
        loginUser,
      }}
    >
      {children}
    </FakeDatabaseContext.Provider>
  );
};

export default FakeDatabaseContextProvider;
