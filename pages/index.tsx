import Layout from "../components/layout";
import { Navbar, Text } from "@nextui-org/react";

function HomePage() {
  return (
    <Layout>
      <Navbar variant={"floating"} isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Somraj Saha
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          hideIn="xs"
          activeColor="default"
          variant="underline-rounded"
          enableCursorHighlight
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#" isActive>
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>

        {/* <Switch */}
        {/*   color="default" */}
        {/*   iconOn={<SunIcon filled />} */}
        {/*   iconOff={<MoonIcon filled />} */}
        {/*   bordered */}
        {/* /> */}
      </Navbar>
    </Layout>
  );
}

export default HomePage;
