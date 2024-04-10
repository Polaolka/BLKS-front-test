import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../../components/burgerMenu";
import {
  selectCurrentUser,
  selectCurrentUserId,
  selectIsLoggedIn,
} from "../../store/user/selectors";
import logo from "../../assets/icons/lock.jpg";
import logo2 from "../../assets/icons/lock2.jpg";
import DropDown from "../../components/profileDropDown";
import { logOut } from "../../store/user/operations";

const Header = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 874 });
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectCurrentUser);
  const id = useSelector(selectCurrentUserId);

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
    <HeaderStyled>
      <div className="flex">
        {isLoggedIn ? (<NavLink to="/">
          <img className="swing" src={logo} alt="logo" />
        </NavLink>) : (<NavLink to="/">
          <img className="swing" src={logo2} alt="logo" />
        </NavLink>)}

      </div>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <div className="flex">
          <ul className="flex gap-8 pl-8 items-center">
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
                <NavLink
                  className={"menu-item"}
                  to="/auth/logout"
                  onClick={logOuthandle}
                >
                  Вийти
                </NavLink>
              </div>
            )}
            {isLoggedIn && <DropDown />}
          </ul>
        </div>
      )}
    </HeaderStyled>
  );
};
export default Header;
