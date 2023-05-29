import Link from "next/link";

import { AiOutlineDoubleRight } from "react-icons/ai";

import { portfolio } from "@constants/portfolio";

function ProjectSection() {
  return (
    <section
      className="container mx-auto max-w-screen-sm space-y-8 px-5
      lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-white-10 md:text-2xl lg:text-3xl">
          Featured Projects
        </h2>
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-300 underline
          underline-offset-2"
        >
          All Projects
          <AiOutlineDoubleRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {portfolio.map((content) => (
          <div
            key={content.label}
            className={`rounded-lg border-l-8 ${content.border} bg-blue-20 p-10`}
          >
            <h3 className="text-2xl text-white-10">{content.label}</h3>
            <p className="my-4 text-white-20">{content.desc}</p>
            <a
              className="text-green-30 underline underline-offset-2
              hover:text-green-10"
              href={content.href}
              target="_blank"
            >
              Read More...
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
