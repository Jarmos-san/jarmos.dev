import { Navbar, Text } from "@nextui-org/react";

function HomePage() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Text>Somraj Saha</Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default HomePage;
