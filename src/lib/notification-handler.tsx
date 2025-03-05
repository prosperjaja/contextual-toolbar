import toast from "react-hot-toast";

const toastStyles = {
  style: {
    background: "#fff",
    color: "#292929",
  },
};

export const successNotification = (mesage: string) =>
  toast.success(mesage, toastStyles);
