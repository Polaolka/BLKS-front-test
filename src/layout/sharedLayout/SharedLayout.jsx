import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { TypeProvider } from "../../hooks/useType";

const SharedLayout = () => {
  return (
    <div id="outer-container">
      <TypeProvider>
        <Header />
        <Outlet />
        <Footer />
      </TypeProvider>
    </div>
  );
};
export default SharedLayout;
