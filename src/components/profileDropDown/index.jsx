import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/selectors";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/user/operations";

export default function DropDown() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  console.log(user.name);

  const logOuthandle = () => {
    if (user.id) {
      dispatch(logOut(user.id));
    }
    window.location.reload(false);
  };

  return (
    <Dropdown>
      <MenuButton></MenuButton>
      <Menu >
        <div>
          Привіт, {user.name}
          <NavLink to="/auth/logout" onClick={logOuthandle}>
            Вийти
          </NavLink>
        </div>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};



const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: inherit;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  overflow: hidden;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);
