'use server';

import { errorFormatter, resFormatter } from "@/config/helpers";
import { API_END_POINT } from "@/utils/constantd";

import axios from "axios";

export async function login(email: string, password: string) {
    try {
      const response = await axios.post(API_END_POINT + "auth/login", {
        email,
        password,
      });
      return resFormatter(response?.data);
    } catch (error: any) {
      return errorFormatter(error?.response);
    }
  }