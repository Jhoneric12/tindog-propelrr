import { useMutation } from "@tanstack/react-query";
import { sample } from "../api/sampleApi";
import { message } from "antd";

export const useSample = () => {
  return useMutation({
    mutationFn: sample,
    onSuccess: () => {
      message.info("Success");
    },
    onError: (error) => {
      message.warning(
        error?.response?.data?.message ||
          "Login failed. Please check your connection or contact support."
      );
    },
  });
};
