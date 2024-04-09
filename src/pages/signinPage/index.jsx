const BASE_URL = process.env.REACT_APP_BASE_URL || "https://test-back-end-blks.onrender.com/api/v1";
console.log("BASE_URL:", BASE_URL);

const SigninPage = () => (
  <main
    id="page-wrap"
    className="flex flex-col items-center max-w-[1980px] mx-auto bg-grey "
  >
    <div className="flex flex-col justify-center items-center bg-grey p-9 gap-14">
      <div className="flex gap-2 items-start">
        <h1 className="flex text-5xl">Ласкаво просимо</h1>
      </div>
    </div>
    <div className="flex flex-col gap-6 pb-8">
      <a
        href={`${BASE_URL}/users/auth/google`}
        className="flex gap-6 items-center cursor-pointer"
      >
        <img
          width={"60px"}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="гугл Реєстрація"
        />
        <p>Заходь :)</p>
      </a>
    </div>
  </main>
);

export default SigninPage;
