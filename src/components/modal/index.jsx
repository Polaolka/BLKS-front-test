import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFund } from "../../store/funds/operations";
import done from "../../assets/icons/DoneMark.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const ConfirmationModal = ({ modalTitle, modalText, modalButton }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="button-white" onClick={handleClickOpen}>
        {modalButton}
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {modalText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відмінити</Button>
          <Button onClick={handleClose}>Підтвердити</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export const CloseFundraiseModal = ({ id }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState([true, false]);
  const [formData, setFormData] = useState({
    status: "CLOSED",
    reasonForClosing: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChack1 = (event) => {
    setChecked([event.target.checked, !event.target.checked]);
    setFormData((prevData) => ({
      ...prevData,
      status: event.target.checked ? "FINISHED" : "CLOSED",
    }));
  };
  const handleChack2 = (event) => {
    setChecked([!event.target.checked, event.target.checked]);
    setFormData((prevData) => ({
      ...prevData,
      status: event.target.checked ? "CLOSED" : "FINISHED",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

  };

  return (
    <div>
      <button className="button-black" onClick={handleOpen}>
        Повідомити про закриття
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col items-center gap-3 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-6 bg-white">
          <h2 id="modal-modal-title" className="pb-6 text-xl">
            Закриваємо збір
          </h2>
          <form
            id="closeForm"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex justify-start items-center gap-2 w-full">
                <Checkbox
                  checked={checked[0]}
                  label="Checkbox"
                  color="success"
                  size="large"
                  onChange={handleChack1}
                />
                <h2>Сума зібрана, триває закупівля і доставка</h2>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2 w-full">
                  <Checkbox
                    checked={checked[1]}
                    label="Checkbox"
                    color="success"
                    size="large"
                    onChange={handleChack2}
                  />
                  <h2>Збір втратив актуальність</h2>
                </div>
                <TextField
                  type="text"
                  label="Опишіть деталі"
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  size="small"
                  name="reasonForClosing"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className=" flex gap-4 self-center">
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

export const ReportModal = ({ id }) => {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formDataValues, setFormDataValues] = useState({
    reportPhotoIMG: "",
    reportDescr: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "reportPhotoIMG") {
      const file = e.target.files[0];
      setImages((prevImages) => [...prevImages, { name, file }]);
    }
    setFormDataValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    Object.entries(formDataValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
  };

  return (
    <div>
      <button className="button-black" onClick={handleOpen}>
        Оформити звіт
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col items-center gap-3 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-6 bg-white">
          <h2 id="modal-modal-title" className="pb-6 text-xl">
            Оформлюємо звіт
          </h2>
          <form
            id="closeForm"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2 w-full">
                  <h2>Додайте декілька фото</h2>
                </div>
                <TextField
                  type="file"
                  required
                  variant="outlined"
                  size="small"
                  name="reportPhotoIMG"
                  onChange={handleInputChange}
                />
                <TextField
                  type="file"
                  variant="outlined"
                  size="small"
                  name="reportPhotoIMG"
                  onChange={handleInputChange}
                />
                <TextField
                  type="file"
                  variant="outlined"
                  size="small"
                  name="reportPhotoIMG"
                  onChange={handleInputChange}
                />
                <div className="flex justify-start items-center gap-2 w-full">
                  <h2>Додайте опис</h2>
                </div>
                <TextField
                  type="text"
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  size="small"
                  name="reportDescr"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className=" flex gap-4 self-center">
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

export const AddPetitionModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  const errorToast = (message) =>
    toast.error(message, {
      position: "top-center",
    });
  const successToast = () =>
    toast(
      "Петиція успішно додана. Після перевірки вона зявиться на сайті. Слава Україні!",
      {
        position: "top-center",
      }
    );
  const [formData, setFormData] = useState({
    petitionTitle: "",
    petitionDescr: "",
    petitionLink: "",
    petitionAuthorName: "",
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

  };

  return (
    <div>
      <button className="button-black" onClick={handleOpen}>
        Додати петицію
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col items-center gap-3 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-6 bg-white">
          <h1 className="flex self-center text-xl lg:text-5xl">
            Додати петицію
          </h1>
          <form
            id="petitform"
            className="flex flex-col gap-4 p-5 w-[300px] md:w-[500px] lg:w-[1000px]"
            onSubmit={handleSubmit}
          >
            <TextField
              type="text"
              label="Назва петиції"
              variant="outlined"
              required
              size="small"
              name="petitionTitle"
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Опис петиції"
              variant="outlined"
              required
              size="small"
              name="petitionDescr"
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Посилання на петицію"
              variant="outlined"
              required
              size="small"
              name="petitionLink"
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              label="Автор петиції"
              variant="outlined"
              required
              size="small"
              name="petitionAuthorName"
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

export const AddInitiativeModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  const errorToast = (message) =>
    toast.error(message, {
      position: "top-center",
    });
  const successToast = () =>
    toast(
      "Ініціатива успішно додана. Після перевірки вона зявиться на сайті. Слава Україні!",
      {
        position: "top-center",
      }
    );

  const [formData, setFormData] = useState({
    initiativeTitle: "",
    initiativeDescr: "",
    initiativeLink: "",
    initiativeOwner: "",
    initiativeOwnerMail: "",
    initiativeOwnerPhone: "",
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

  };

  return (
    <div>
      <button className="button-black" onClick={handleOpen}>
        Додати ініціативу
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col items-center gap-3 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-6 bg-white">

        </Box>
      </Modal>
    </div>
  );
};

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

export const HowItWorksModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="self-center">
      <button className="button-white" onClick={handleOpen}>
        Як це працює?
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute flex flex-col justify-center items-center top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[400] rounded-[8px] p-2 bg-grey">
          <h2 className="text-lg pr-5">Як це працює</h2>
          <Splide
            aria-label="how it works"
            className="w-[400px] bg-grey rounded-[20px]"
          >
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">01</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Військовий створює запит</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">02</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>
                  Волонтер знаходить цей запит і відгукується на нього
                </span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">03</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Вони обоє підтверджують співпрацю</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">04</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Волонтер відкриває збір</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">05</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Донатери долучаються</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">06</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Кошти зібрано - волонтер закуповує та відправляє</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">07</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Військовий отримує та підтверджує отримання</span>
              </li>
            </SplideSlide>
            <SplideSlide className="flex justify-center p-2">
              <li className="flex flex-col gap-4 p-4 bg-white rounded-2xl text-xs sm:w-full smx:w-fit">
                <div className="flex justify-between items-center">
                  <span className="opacity-50">08</span>
                  <img src={done} alt="done-icon" />
                </div>
                <span>Всі тішаться</span>
              </li>
            </SplideSlide>
          </Splide>
        </Box>
      </Modal>
    </div>
  );
};
