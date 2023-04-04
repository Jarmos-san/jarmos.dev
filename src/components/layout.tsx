import { PropsWithChildren } from "react";

import Navbar from "./navbar";

function LayoutComponent({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default LayoutComponent;
