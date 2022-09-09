import { styled } from "@nextui-org/react";
import { PropsWithChildren } from "react";

const Box = styled("main", {
  boxSizing: "border-box",
});

function Layout({ children }: PropsWithChildren) {
  return <Box>{children}</Box>;
}

export default Layout;
