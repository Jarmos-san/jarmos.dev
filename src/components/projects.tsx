import Link from "next/link";

import { portfolio } from "@constants/portfolio";

function ProjectSection() {
  return (
    <section className="container mx-auto space-y-8 px-8 md:px-20 lg:px-36">
      <h2 className="text-xl font-bold text-white-10 md:text-2xl lg:text-3xl">
        Portfolio
      </h2>
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
      <div className="text-xl text-green-20 underline underline-offset-4">
        <Link href="/portfolio">Check out the other projects...</Link>
      </div>
    </section>
  );
}

export default ProjectSection;
