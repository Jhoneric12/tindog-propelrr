import { Spin, App } from "antd";
import React from "react";

export const useLoadingModal = () => {
  const { modal } = App.useApp();

  const showLoading = (text) => {
    modal.info({
      centered: true,
      icon: React.createElement(Spin, { className: "mr-3", style: { marginRight: 10 } }),
      title: "Loading",
      content: text,
      closable: false,
      maskClosable: false,
      footer: null,
    });
  };

  return { showLoading };
};
