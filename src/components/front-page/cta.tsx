import { GrContact } from "react-icons/gr";

function CallToAction() {
  return (
    <section
      className="flex flex-col items-center space-y-6 bg-blue-20 py-16
      text-center"
    >
      <h2
        className="px-8 text-2xl font-bold text-green-10 md:text-3xl
        lg:text-5xl"
      >
        What Are You Working On?
      </h2>

      <p className="px-8 text-white-10 md:px-44 lg:px-56">
        Let&apos;s have a conversation! I&apos;d love to hear about what
        you&apos;re working on and find a way to work together.
      </p>

      <button
        type="button"
        className="flex space-x-2 rounded-lg border-transparent bg-green-30
        p-2.5 font-bold hover:bg-green-10"
      >
        <GrContact size={22} color="black" />
        <a href="mailto:somraj.mle@gmail.com" target="_blank">
          Contact
        </a>
      </button>
    </section>
  );
}

export default CallToAction;
