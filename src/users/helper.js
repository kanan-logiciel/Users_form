import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Generate random id
export const getRandomId = () => {
  return Math.floor(Math.random() * 900) + 100;
};

// Show Toast after delete
export const notifyDel = () => toast("User data deleted successfully!");

// Show success toast after submit
export const notify = () => toast("User data saved successfully!");
