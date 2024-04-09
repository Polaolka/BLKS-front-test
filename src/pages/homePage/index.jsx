import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { selectIsLoggedIn } from "../../store/user/selectors";
import { HowItWorksModal } from "../../components/modal";
import { FundraisesSkeleton } from "../../components/skeletons";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <main
      id="page-wrap"
      className="flex flex-col items-center max-w-[1980px] mx-auto "
    >
      <section className="justify-center bg-white flex flex-col pt-8 2xl:pt-32 md:px-5 mb-12">
        <div className="flex justify-center items-center sm:px-5 mb-8">
          <h1 className="flex text-5xl">Кoжен запит важливий!</h1>
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-5 text-center bg-grey rounded-2xl p-6 mb-6">
          <div className="flex flex-col justify-around gap-4 items-center xl:w-[400px]  bg-white rounded-2xl p-6 ">

          </div>
          <div className="flex flex-col justify-around gap-4 items-center xl:w-[400px]  bg-white rounded-[12px] p-6">

          </div>
          <div className="flex flex-col justify-around gap-4 items-center xl:w-[400px]  bg-white rounded-[12px] p-6">

          </div>
        </div>
        <HowItWorksModal />
      </section>
      <section className="flex justify-center bg-grey py-[75px] px-5 w-full">
        <div className="flex mx-[auto] my-[0] w-[1360px] ">

        </div>
      </section>
      <div className="flex w-full justify-center bg-grey">
        <h3 className="flex text-4xl p-8">Збори</h3>
      </div>
      <section className="flex flex-col gap-[32px] w-full items-center bg-grey md:px-5 pb-8">

      </section>
    </main>
  );
};
export default HomePage;
