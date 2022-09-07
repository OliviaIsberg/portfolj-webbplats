import { createContext, useState } from "react";

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <LogInContext.Provider
      value={{
          loggedInUser,
          setLoggedInUser
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;