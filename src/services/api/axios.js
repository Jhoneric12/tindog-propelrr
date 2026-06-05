import { message } from "antd";
import axios from "axios";
import dayjs from "dayjs";

export const axiosAuth = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export const getUsersValues = {
  vendor: "VENDOR",
  client: "CLIENT",
  superadmin: "SUPERADMIN",
};

export const getUserToken = (user = getUsersValues.user) => {
  if (user === getUsersValues.vendor) {
    return useVendorAuthStore.getState();
  } else if (user === getUsersValues.superadmin) {
    return useSuperAdminAuthStore.getState();
  } else {
    return useClientAuthStore.getState();
  }
};

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = dayjs().unix();
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
};

export const createAxiosInstanceWithInterceptor = ({ type = "application", user }) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  if (type === "application/json") {
    headers["Content-Type"] = "application/json";
  } else {
    headers["content-type"] = "multipart/form-data";
  }

  const instance = axios.create({
    // baseURL: baseURL || import.meta.env.VITE_BASE_URL,
    headers,
  });

  instance.interceptors.request.use(async (config) => {
    try {
      const { token, reset } = getUserToken(user);
      if (!token) {
        // message.warning("No authorization token found. Please log in again.");
        reset();
        throw new Error("No token found");
      }

      if (isTokenExpired(token)) {
        message.warning("Session expired. Please log in again.");
        reset();
        throw new Error("Token expired");
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch (error) {
      console.error({ error });
    }
    // return config;
  });

  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      const { reset } = getUserToken(user);
      const errMessage = error.response?.data;
      if (errMessage?.message === "Invalid token." || errMessage?.code == 300) {
        message.warning("Unable to process transaction. You have to login again.");
        reset();
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
};
