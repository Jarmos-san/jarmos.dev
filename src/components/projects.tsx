import Link from "next/link";

import { portfolio } from "@constants/portfolio";

function ProjectSection() {
  return (
    <section className="container mx-auto px-8 md:px-20 lg:px-36 ">
      <h2
        className="mb-4 text-xl font-bold text-white-10 md:text-2xl
        lg:text-3xl"
      >
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
            <Link
              className="text-green-30 underline underline-offset-2
              hover:text-green-10"
              href={content.href}
            >
              Read More...
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
