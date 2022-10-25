import { styled } from "../stitches.config";

// Base container element which every other component inherits from.
const Container = styled("div", {
    display: "flex",
});

/* TODO: Add some "drop shadow" to the component as suggested in the template. */
const Heading = styled(Container, {
    background: "linear-gradient(180deg, $glow10 0%, $glow20 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    textShadow: "0px 0px 76px rgba(188, 251, 195, 0.3)",
    justifyContent: "center",

    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "142%",
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
