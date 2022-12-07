import Link from "next/link";

import styles from "./cta.module.scss";
import { RiChatPollFill } from "react-icons/ri";

function CtaSection() {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>What are you working on?</h2>

            <p className={styles.subheading}>
                Do you have a business idea or perhaps a solution to a specific problem
                to solve? Then feel free to reach out to me & I am sure we can figure
                out some ways to work/collaborate together on that opporunity.
            </p>

            <Link href="/about#contact" passHref>
                <a className={styles.contactBtn}>
                    <RiChatPollFill title="chat button" size={22} />
                    Chat
                </a>
            </Link>
        </section>
    );
}

export default CtaSection;
