import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation  } from 'react-router-dom';

const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useParams();
  console.log("accessToken, refreshToken:", accessToken, refreshToken);

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
console.log("accessToken:", accessToken);
    if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/');
    }
}, [location, navigate]);

  return (
    <div>
      <p>Обробка токенів...</p>
    </div>
  );
};

export default RedirectPage;