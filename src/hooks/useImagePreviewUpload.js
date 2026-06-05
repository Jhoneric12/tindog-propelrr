import { useState } from "react";

const useImagePreview = () => {
  const [image, setImage] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleImageUpload = (info) => {
    const file = info.fileList[0]?.originFileObj;

    setFileList(info.fileList);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const setPreviewFromUrl = (url) => {
    if (url) setImage(url);
  };

  const reset = () => {
    setImage(null);
    setFileList([]);
  };

  return { preview: image, fileList, handleImageUpload, reset, setPreviewFromUrl };
};

export default useImagePreview;
