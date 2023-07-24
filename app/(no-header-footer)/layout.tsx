import React from "react";

type NoHeaderFooterLayoutProp = {
  children: React.ReactNode;
};

const NoHeaderFooterLayout = ({ children }: NoHeaderFooterLayoutProp) => {
  return <section>{children}</section>;
};
export default NoHeaderFooterLayout;
