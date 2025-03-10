import React, { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
