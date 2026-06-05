import "@ant-design/v5-patch-for-react-19";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, App as AntProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          componentSize: "middle",
          // fontSize: 13,
          // colorPrimary: "#E95C0E",
          colorPrimary: "#333333",
          colorText: "#000000",
          colorTextSecondary: "#828282",
          colorSecondary: "#027A8A",
          colorWarning: "#E2B93B",
          colorSuccess: "#27AE60",
          colorError: "#EB5757",
          colorInfo: "#2F80ED",
          fontFamily: "Poppins, sans-serif",
          colorBgBase: "#FFFFFE",
          colorBorder: "#e0e0e0",
          colorBgContainer: "#fdfdfd",
          colorTextHeading: "#000000",
          colorTextDescription: "#828282",
          colorBorderSecondary: "#e0e0e0",
          colorBgElevated: "#FFFFFE",
          fontSize: 13,
        },
        components: {
          Table: {
            headerBg: "#FFFFFE",
            borderColor: "rgba(201, 201, 201, 0.46)",
            // fontSize: 13,
          },
          Menu: {
            itemSelectedBg: "#333333",
            itemSelectedColor: "#fff",
          },
          Select: {
            optionSelectedColor: "#4f4f4f",
            optionSelectedBg: "#EEEFF5",
          },
          Card: {
            bodyPadding: 40,
          },
          Tabs: {
            itemColor: "#BBBBBB",
            cardGutter: 4,
            horizontalItemGutter: 64,
          },
          Input: {
            variant: "filled",
          },
          Calendar: {
            itemActiveBg: "#eeeff5",
          },
        },
      }}
    >
      <AntProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </QueryClientProvider>
      </AntProvider>
    </ConfigProvider>
  </StrictMode>
);
