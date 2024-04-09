import FundCard from "../../components/fundCard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFunds } from "../../store/funds/operations";
import { selectCurrentUser } from "../../store/user/selectors";
import { FundsSkeleton } from "../../components/skeletons";
import { ToastContainer } from "react-toastify";
import { AddFundModal } from "../../components/modal";

const FoundsPage = () => {
  const dispatch = useDispatch();
  const { funds, totalPages, loading } = useSelector((state) => state.funds);
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(fetchFunds());
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(fetchFunds(page));
  };

  return (
    <main
      id="page-wrap"
      className="flex flex-col items-center max-w-[1980px] mx-auto"
    >
      <ToastContainer />
      <div className="flex sm:flex-col md:flex-row gap-9 justify-between w-3/4 py-8 px-5 items-center">
        <h1 className="flex text-5xl">Фонди</h1>
        <div className="flex flex-col sm:items-center md:items-start gap-8 w-96">
          <p className="flex">
            Якщо ви фонд - долучайтесь до списку,
            <br /> щоб більше людей дізнались про вас.
          </p>
          {user.role === "ADMIN" && <AddFundModal />}
        </div>
      </div>
      <section className="flex flex-col py-8 gap-8 justify-center w-full bg-grey">
        {!loading ? (
          <div className="flex flex-wrap gap-[15px] justify-center">
            {funds.map((fund) => (
              <FundCard
                key={fund._id}
                name={fund.fundTitle}
                description={fund.fundDescr}
                fundLink={fund.fundLink}
              />
            ))}
          </div>
        ) : (
          <FundsSkeleton />
        )}
      </section>
    </main>
  );
};

export default FoundsPage;
