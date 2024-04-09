import { push as Menu } from "react-burger-menu";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectIsLoggedIn,
} from "../../store/user/selectors";
import DropDown from "../../components/profileDropDown";

const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const menuOpen = () => {
    setIsMenuOpen(true);
  };
  const menuClose = () => {
    setIsMenuOpen(false);
  };

  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      isOpen={isMenuOpen}
      onOpen={menuOpen}
      onClose={menuClose}
    >
      <ul
        className="flex gap-8 pr-8 items-center border-r-2 border-grey"
        onClick={handleMenuClick}
      >
        <NavLink
          className={"menu-item"}
          onClick={uppPageHandler}
          to="/users"
        >
          Збори
        </NavLink>
        
      </ul>
      <ul className="flex gap-8 pl-8 items-center" onClick={handleMenuClick}>
        {isLoggedIn || (
          <NavLink
            className={"menu-item"}
            onClick={uppPageHandler}
            to="/signin"
          >
            Увійти
          </NavLink>
        )}
        {isLoggedIn && (<DropDown />)}
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
