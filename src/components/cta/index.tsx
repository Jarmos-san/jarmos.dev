import Link from "next/link";

import { RiChatPollFill } from "react-icons/ri";

function CtaSection() {
  return (
    <section>
      <h2>What Are You Working On?</h2>

      <p>
        Do you have a business idea or perhaps a solution to a particular
        business problem? Then feel free to reach out to me and I am sure we can
        figure our some ways to work or collaborate together on that
        opportunity.
      </p>

      <Link href="/about">
        <RiChatPollFill title="Chat" size={22} />
        Chat
      </Link>
    </section>
  );
}

export default CtaSection;
