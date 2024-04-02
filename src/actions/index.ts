'use client';

import { axiosInstance } from "@/config/axios";

export const getAuth = async () => {
    let res = await axiosInstance.get('/api/auth');
    return res;
}