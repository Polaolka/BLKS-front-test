import { push as Menu } from "react-burger-menu";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { selectCurrentUser, selectCurrentUserId, selectIsLoggedIn } from "../../store/user/selectors";
import DropDown from "../../components/profileDropDown";
import { logOut } from "../../store/user/operations";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectCurrentUser);
  const id = useSelector(selectCurrentUserId);
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

  const logOuthandle = () => {
    if (id) {
      
      dispatch(logOut(id));
    }
    window.location.reload(false);
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
      ></ul>
      <ul className="flex gap-8 pl-8 items-center" onClick={handleMenuClick}>
        {!isLoggedIn ? (
          <NavLink
            className={"menu-item"}
            onClick={uppPageHandler}
            to="/signin"
          >
            Увійти
          </NavLink>
        ) : (
          <div>
            Привіт, {user.name}
          <NavLink to="/auth/logout" onClick={logOuthandle}>
            Вийти
          </NavLink>
          </div>
        )}
        {isLoggedIn && <DropDown />}
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
