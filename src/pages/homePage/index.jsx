import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../store/user/operations';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
      dispatch(currentUser());
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, [dispatch]);
  return (
    <main
      id="page-wrap"
      className="flex flex-col items-center max-w-[1980px] mx-auto "
    >
    <div>
      <h1>Головна сторінка</h1>
      {isLoggedIn ? (
        <p>Користувач авторизований!</p>
      ) : (
        <p>Користувач не авторизований.</p>
      )}

    </div>

    </main>
  );
};
export default HomePage;
