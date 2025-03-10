import React, { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MarketingLayout;
