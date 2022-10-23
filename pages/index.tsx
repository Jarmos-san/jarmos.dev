import { styled } from "../stitches.config";

/* TODO: Add some "drop shadow" to the component as suggested in the template. */
const Heading = styled("h1", {
    backgroundImage: "linear-gradient($glow10, $glow20)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
});

function HomePage() {
    return (
        <Heading>I&apos;m Somraj, Software Engineer And Technical Writer.</Heading>
    );
}

export default HomePage;
