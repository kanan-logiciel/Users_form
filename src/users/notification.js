import { toast } from "react-toastify";

const defaultConfigs = {
  position: "top-right",
  autoClose: 3000, // 3 seconds
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "light",
  // transition: "Bounce",
};

export const showSuccess = (msg) => {
  toast.success(msg, defaultConfigs);
};

export const showError = (msg) => {
  toast.error(msg, defaultConfigs);
};

export const showWarning = (msg) => {
  toast.warn(msg, defaultConfigs);
};

export const showInfo = (msg) => {
  toast.info(msg, defaultConfigs);
};
