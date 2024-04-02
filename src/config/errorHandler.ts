
import { store } from "@/redux/store";
import toast from "react-hot-toast";

export function apiErrorHandler(
  statusCode: number,
  tostr: boolean,
  error?: { data: any },
  message?: string
) {
  if (statusCode === 403 || statusCode === 401) {
    //store.dispatch();
  }

  if (tostr && message) {
    toast.error(message);
  }
  return;
}
