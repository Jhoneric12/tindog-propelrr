import { viewHandlerCopyable } from "./ItemFormat";

export const formatList = (str) => (str ? str.split(",").join(", ") : "N/A");

export const decodeHtmlEntities = (html, isCopyable = false) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return isCopyable ? viewHandlerCopyable(txt.value) : txt.value;
};

export const getImageUrl = (imageUrl) => {
  const url = imageUrl;
  if (url?.includes("https://" || url?.includes("http://"))) {
    return url;
  }
  return `${import.meta.env.VITE_BASE_URL}${url}`;
};

export const getImageUrlPublic = (imageUrl) => {
  if (!imageUrl) return;
  //   const img = imageUrl.replace("public", import.meta.env.VITE_ADMIN_BASE_URL);
  const img = `${import.meta.env.VITE_ADMIN_BASE_URL}/${imageUrl}`;
  return img;
};
