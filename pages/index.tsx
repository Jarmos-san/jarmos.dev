import { styled } from "../stitches.config";

const Text = styled("h1", {
  color: "$text10",
});

function HomePage() {
  return <Text>Hello World!</Text>;
}

export default HomePage;
