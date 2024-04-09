import { addFund } from "../../store/funds/operations";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFund = () => {
  const errorToast = (message) =>
    toast.error(message, {
      position: "top-center",
    });
  const successToast = () =>
    toast("Фонд успішно додано. Слава Україні!", {
      position: "top-center",
    });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fundTitle: "",
    fundDescr: "",
    fundLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await addFund(formData);
      if (result) {
        successToast();
        setFormData({
          fundTitle: "",
          fundDescr: "",
          fundLink: "",
        });
        document.getElementById("fundform").reset();
      }
    } catch (error) {
      setIsLoading(false);
      errorToast(error.response.data.message);
    }
  };
  return (
    <main
      id="page-wrap"
      className="flex flex-col md:items-center justify-center max-w-[1980px] mx-auto p-2 lg:p-8 bg-grey"
    >
      <ToastContainer />
      <button className="sm:p-4 md:p-0 self-start" onClick={() => navigate(-1)}>
        <KeyboardReturnIcon />
        Назад
      </button>
      <h1 className="flex self-center text-xl lg:text-5xl">Додати Фонд</h1>
      <form
        id="fundform"
        className="flex flex-col gap-4 p-5 lg:w-[1000px]"
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          label="Назва"
          variant="outlined"
          required
          size="small"
          name="fundTitle"
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          label="Опис"
          variant="outlined"
          required
          size="small"
          name="fundDescr"
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          label="Посилання"
          variant="outlined"
          required
          size="small"
          name="fundLink"
          onChange={handleInputChange}
        />
        <div className="self-center">
          {isLoading ? (
            <button disabled type="submit" className="button-black">
              Надіслати
            </button>
          ) : (
            <button type="submit" className="button-black">
              Надіслати
            </button>
          )}
        </div>
      </form>
      {/* <div className="tooltip">
        <img src={quest} alt="tooltip" />
        <span className="tooltiptext text-xs">
          Заповнюйте та надсилайте заявку, ваш фонд зявиться у списку після
          перевірки.
        </span>
      </div> */}
    </main>
  );
};

export default AddFund;
