import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Отримати параметри з URL-адреси
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');

    // Зберегти токени у локальному сховищі браузера
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
  }, []);
  return (
    <main
      id="page-wrap"
      className="flex flex-col items-center max-w-[1980px] mx-auto "
    >


    </main>
  );
};
export default HomePage;
