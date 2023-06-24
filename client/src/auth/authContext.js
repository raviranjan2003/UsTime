import { createContext, useState } from 'react';

const AuthContext = createContext({
    token: '',
    isUserLoggedIn: false,
    login: (user) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
  const localtoken = localStorage.getItem('token');
  const [token, setToken] = useState(localtoken);
  let userLoggedIn = !!token;

  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    userLoggedIn = false;
  }

  const loginHandler = (user) => {
    setToken(user.token);
    localStorage.setItem('token', user.token);
    const remainingMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());
    userLoggedIn = true;
    const remainingTime = calculateRemainingTime(expiryDate);
    console.log(remainingTime)
    setTimeout(logoutHandler, remainingTime);
  }

  const contextValue = {
    token: token,
    isUserLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;