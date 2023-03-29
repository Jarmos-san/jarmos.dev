import Link from "next/link";

import { RiChatPollFill } from "react-icons/ri";

import styles from "./cta.module.scss";

function CtaSection() {
  return (
    <section className={styles.ctaContainer}>
      <h2 className={styles.ctaHeader}>What Are You Working On?</h2>

      <p className={styles.ctaSubheader}>
        Do you have a business idea or perhaps a solution to a particular
        business problem? Then feel free to reach out to me and I am sure we can
        figure our some ways to work or collaborate together on that
        opportunity.
      </p>

      <Link href="/about" className={styles.contactBtn}>
        <RiChatPollFill title="Chat" size={22} />
        Chat
      </Link>
    </section>
  );
}

export default CtaSection;
