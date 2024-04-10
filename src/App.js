import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/sharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { currentUser } from "./store/user/operations";
import RedirectPage from "./pages/signinPage/RedirectPage";

const HomePage = lazy(() => import("./pages/homePage"));
const SigninPage = lazy(() => import("./pages/signinPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/:accessToken/:refreshToken"
            element={<RedirectPage />}
          ></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
        <Route path="/signin" element={<SigninPage />}></Route>
      </Routes>
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="flex justify-center items-center sm:p-28 xl:p-[200px]">
      <span className="loader"></span>
    </div>
  );
}
export default App;
