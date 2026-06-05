import { createAxiosInstanceWithInterceptor, getUsersValues } from "./axios";

export const sample = async () => {
  return await createAxiosInstanceWithInterceptor({
    user: getUsersValues.client,
  }).get(`/api/v1/exhibitor/contacts`);
};
