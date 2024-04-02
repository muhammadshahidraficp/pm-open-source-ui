'use client';

import Cookies from "js-cookie";

export default function apiHandler (callback: any, ...args: any) {
    const token = Cookies.get('token');
    return callback(token, ...args);
}