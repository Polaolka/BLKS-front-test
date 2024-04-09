// import dija from "../../assets/images/dijaicon.png";
import quest from "../../assets/icons/QuestionMark.svg";
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://requesty.com.ua/api/v1";
console.log("BASE_URL:", BASE_URL);

const SigninPage = () => (
  <main
    id="page-wrap"
    className="flex flex-col items-center max-w-[1980px] mx-auto bg-grey "
  >
    <div className="flex flex-col justify-center items-center bg-grey p-9 gap-14">
      <div className="flex gap-2 items-start">
        <h1 className="flex text-5xl">Ласкаво просимо</h1>
        <div className="tooltip">
          <img src={quest} alt="tooltip" />
          <span className="tooltiptext text-xs">
            Ми дбаємо про безпеку, тому для захисту від шхрайства запровадили
            Дія реєстрацію для військових та волонтерів.
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6 pb-8">
      {/* <div className="flex gap-6 items-center cursor-pointer">
        <img width={"60px"} src={dija} alt="діяРеєстрація" />
        <p>Для військових та волонтерів</p>
      </div> */}
      <a
        href={`${BASE_URL}/users/auth/google`}
        className="flex gap-6 items-center cursor-pointer"
      >
        <img
          width={"60px"}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="гуглРеєстрація"
        />
        <p>Для донатерів</p>
      </a>
    </div>
  </main>
);

export default SigninPage;
