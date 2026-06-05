import { Suspense } from "react";
import { LazySpinner, LazySpinnerMenu, PrimarySpinner } from "../components/ui/spinners";
import { Spin } from "antd";

export const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<LazySpinner />}>
      <Component {...props} />
    </Suspense>
  );
};

export const withSuspenseMini = (Component) => {
  return (props) => (
    <Suspense fallback={<PrimarySpinner />}>
      <Component {...props} />
    </Suspense>
  );
};

export const withSuspenseMenu = (Component) => {
  return (props) => (
    <Suspense fallback={<LazySpinnerMenu />}>
      <Component {...props} />
    </Suspense>
  );
};
