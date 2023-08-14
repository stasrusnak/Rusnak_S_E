import {toast} from "vue3-toastify";

export const notifySuccess = (text) => {
  toast.success(text, {
    autoClose: 1000,
    theme:"colored"
  });
}
export const notifyWarning = (text) => {
  toast.warning(text, {
    autoClose: 1000,
    theme:"colored"
  });
}

