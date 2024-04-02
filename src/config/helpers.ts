import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { IResponse } from "@/utils/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getUserToken = () => {
  !!Cookies.get("token") ? Cookies.get("token") : undefined;
};

export const setUserToken = (value: string, options: any) => {
  Cookies.set("token", value, options);
};

export function resFormatter(res: IResponse) {
  return {
    isSuccess: true,
    message: res?.message || undefined,
    data: res?.data,
    statusCode: res?.statusCode,
    status: res?.status || undefined,
  };
}

export function errorFormatter(error: IResponse) {
  return {
    isSuccess: false,
    data: error?.data,
    statusCode: error?.data?.statusCode,
    status: error?.data?.status || undefined,
    errorCode: error?.data?.errorCode || null,
    message: error?.data?.message || ""
  };
}

export const handleMetamaskErrors = (err: any) => {
  switch (err.code) {
    case -32002:
      toast.error("In metamask you have already pending request please check");
      break;
  }
};

export const hexToNum = (val: any) => {
    return parseInt(val) / 1000000000000000000;
}

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const formatDate = (date: string) => {
  return moment(date).format("DD-MM-YYYY HH:mm");
};

export function reduceText(
  text: string,
  maxLen: number = 25,
  sliceLen: number = 8
) {
  return text?.length > maxLen
    ? `${text?.slice(0, sliceLen)}...${text?.slice(-sliceLen)}`
    : text;
}

export function queryGenerator(data: any) {
  return new URLSearchParams(data).toString();
}

export const fixedDecimal = (value: number = 0, points: number = 8) => {
  // var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (points || -1) + '})?');
  // return value.toString().match(re)[0];
  return Number.parseFloat(value?.toFixed(points));
};

export const floorValue = (value: number | string) => {
  return Math.floor(Number(value));
};

export function currencyLabel(labelValue: number | string) {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.floor(Math.abs(Number(labelValue)) / 1.0e9) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.floor(Math.abs(Number(labelValue)) / 1.0e6) + "M"
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? Math.floor(Math.abs(Number(labelValue)) / 1.0e3) + "K"
    : Math.abs(Number(labelValue));
}
