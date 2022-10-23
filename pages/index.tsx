import { styled } from "../stitches.config";

// Base container element which every other component inherits from.
const Container = styled("div", {
    display: "flex",
});

/* TODO: Add some "drop shadow" to the component as suggested in the template. */
const Heading = styled(Container, {
    // backgroundImage: "linear-gradient($glow10, $glow20)",
    // backgroundClip: "text",
    // "-webkit-text-fill-color": "transparent",
    justifyContent: "center",
});

function HomePage() {
    return (
        <>
            <title>Somraj Saha</title>
            <Heading as="h1">
                I&apos;m Somraj, Software Engineer And Technical Writer.
            </Heading>
        </>
    );
}

export default HomePage;
