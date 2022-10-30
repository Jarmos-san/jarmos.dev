import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.heading}>
                This is Somraj, a Full-Stack Software Engineer & Technical Writer.
            </h1>

            <p className={styles.subheading}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet
                odio a nulla eleifend molestie. Nam non posuere nibh, ac dignissim
                dolor. Nullam viverra ac massa vel euismod. Praesent vestibulum velit a
                risus pellentesque, sed finibus lorem vulputate. Nulla vel eleifend mi.
                Praesent consectetur vel odio non rutrum. Proin dictum orci est, eget
                lobortis felis tristique at. Aenean quis erat orci. Curabitur nec quam
                mattis ante rhoncus fermentum sit amet at urna. Sed velit purus,
                pharetra sed massa ac, suscipit pellentesque erat. In hendrerit, velit
                eget maximus viverra, tortor diam consequat dui, vitae auctor elit
                lectus nec libero. Nam nec ultrices felis.
            </p>
        </header>
    );
}

export default Header;
