import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { updateUser } from "../../store/user/operations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProfilePage = () => {
  const errorToast = (message) =>
    toast.error(message, {
      position: "top-center",
    });
  const successToast = () =>
    toast.success("Інформацію оновлено", {
      position: "top-center",
    });

  const { role, avatarIMG, name } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);


  const [formDataValues, setFormDataValues] = useState({
    newName: "",
    avatarIMG: "",
  });


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatarIMG" && files.length > 0) {
      setImages([files[0]]);
    }
    setFormDataValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmitUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(formDataValues).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (images.length > 0) {
        formData.append("avatarIMG", images[0]);
      }
      const result = dispatch(updateUser(formData));
      if (result) {
        successToast();
        setFormDataValues({
          avatarIMG: "",
          name: "",
        });
        document.getElementById("userForm").reset();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      errorToast(error.response);
    }
  };

  return (
    <main
      id="page-wrap"
      className="flex flex-col items-center justify-center gap-5 max-w-[1980px] p-8 mx-auto bg-grey relative"
    >
      <ToastContainer />
      <button className="absolute left-4 top-5" onClick={() => navigate(-1)}>
        <KeyboardReturnIcon />
        Назад
      </button>
      <h1 className="text-3xl">{name}</h1>
      <form
        id="userForm"
        onSubmit={handleSubmitUser}
        className="flex flex-col p-8 gap-8 justify-center w-full smx:w-[500px]"
      >
        <div className="flex flex-col gap-4 p-6 bg-white rounded-md">
          {role !== "VOLUNTEER" && (
            <div className="flex flex-col items-center gap-2">
              <img src={avatarIMG} alt="avatar" className="rounded-2xl w-28" />
            </div>
          )}
          <div className="flex flex-col gap-4">
            <TextField
              type="file"
              helperText="Виберіть аватарку"
              variant="outlined"
              size="small"
              name="avatarIMG"
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Ім'я"
              helperText="Бажано вказати Ім'я та по батькові"
              variant="outlined"
              size="small"
              name="newName"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" flex gap-4 self-center">
          <button type="submit" className="button-black">
            Застосувати
          </button>
        </div>
      </form>


    </main>
  );
};

export default ProfilePage;
