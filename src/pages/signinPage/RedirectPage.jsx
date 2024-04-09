import React, { useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const RedirectPage = () => {
    let navigate = useNavigate();
  const { accessToken, refreshToken } = useParams();

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    navigate ('/');
  }, [accessToken, refreshToken, navigate ]);

  return (
    <div>
      <p>Обробка токенів...</p>
    </div>
  );
};

export default RedirectPage;