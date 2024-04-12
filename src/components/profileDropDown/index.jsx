import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, selectCurrentUserId } from "../../store/user/selectors";
import { logOut } from "../../store/user/operations";

export default function DropDown() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const id = useSelector(selectCurrentUserId);

  const logOuthandle = () => {
    if (id) {
      dispatch(logOut(id));
    }
    // window.location.reload(false);
  };

  return (
    <Dropdown>
      <Menu >
        <div>
          Привіт, {user.name}
          <button onClick={logOuthandle}>
            Вийти
          </button>
        </div>
      </Menu>
    </Dropdown>
  );
}
