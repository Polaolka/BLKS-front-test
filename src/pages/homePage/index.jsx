import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../store/user/operations';
import { selectIsLoggedIn } from '../../store/user/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
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
