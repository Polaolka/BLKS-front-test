import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../../components/burgerMenu";
import {
  selectIsLoggedIn,
} from "../../store/user/selectors";
import logo from "../../assets/icons/LOGO green.svg";
import DropDown from "../../components/profileDropDown";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 874 });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <div className="flex">
        <NavLink to="/">
          <img className="swing" src={logo} alt="logo" />
        </NavLink>
      </div>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <div className="flex">
          <ul className="flex gap-8 pr-8 items-center border-r-2 border-grey">
            <NavLink to="/users">Хто тут є?</NavLink>
          </ul>
          <ul className="flex gap-8 pl-8 items-center">
            {isLoggedIn || <NavLink to="/signin">Увійти</NavLink>}
            {isLoggedIn && (<DropDown />)}
          </ul>
        </div>
      )}
    </HeaderStyled>
  );
};
export default Header;
