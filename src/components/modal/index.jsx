import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFund } from "../../store/funds/operations";

import "@splidejs/react-splide/css/sea-green";


export const AddFundModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const errorToast = (message) =>
    toast.error(message, {
      position: "top-center",
    });
  const successToast = () =>
    toast("Фонд успішно додано. Слава Україні!", {
      position: "top-center",
    });

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
    <div>
      <button className="button-black" onClick={handleOpen}>
        Додати фонд
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col items-center gap-3 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-6 bg-white">
          <h1 className="flex self-center text-xl lg:text-5xl">Додати Фонд</h1>
          <form
            id="fundform"
            className="flex flex-col gap-4 p-5 w-[300px] md:w-[500px] lg:w-[1000px]"
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
                <button
                  type="submit"
                  className="button-black self-center pointer-events-none"
                >
                  <div className="flex space-x-2 justify-center items-center">
                    <div className="h-4 w-4 bg-grey rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-4 w-4 bg-grey rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-4 w-4 bg-grey rounded-full animate-bounce"></div>
                  </div>
                  {isLoading || "Надіслати"}
                </button>
              ) : (
                <button type="submit" className="button-black">
                  Надіслати
                </button>
              )}
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

