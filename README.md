# jarmos.dev

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Jarmos-san/personal-website/prod-deploy.yml?branch=main&label=CI%2FCD&logo=github&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/Jarmos-san/personal-website?label=Repo%20Size&logo=github&style=flat-square)
![GitHub Sponsors](https://img.shields.io/github/sponsors/Jarmos-san?color=%23EA4AAA&label=Support%20the%20Project&logo=github%20sponsors&style=flat-square)
![GitHub](https://img.shields.io/github/license/Jarmos-san/personal-website?label=License&logo=github&style=flat-square)
![Website](https://img.shields.io/website?down_color=Red&down_message=Offline&label=Website&logo=Vercel&style=flat-square&up_message=Online&url=https%3A%2F%2Fjarmos.vercel.app)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Jarmos-san/personal-website?label=Commit%20Frequency&logo=github&style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/Jarmosan?style=social)

This repository hosts the source code for my personal website (and "digital
garden") on [jarmos.dev](https://jarmos.dev). The website is built on the
following tech stack;

- [`Astro`](https://astro.build) for building the website.
- [`Vercel`](https://vercel.com) for hosting the static site.
- [`Terraform`](https://terraform.io) for managing the deployment to Vercel and
  other cloud resources required for proper functioning of the website.

## About the Project

The project is
[my _nth_ attempt at rebuilding it from scratch](./web#why-astro-instead-of-nextjs-or-any-other-framework-for-that-matter)
and this time I used Astro. If you're looking for the previous version of the
website built using [Next.js](https://nextjs.org), then head over to
[this archived repository](https://github.com/Jarmos-san/nextjs-blog).

The rebuild took me a surprising <2 weeks time and all of it can be credited to
the fact that my prior knowledge in HTML, CSS and JS were pretty handy and it
transferred well! Astro also has inbuilt Markdown support which was one of the
main concern I had with Next.js and the rest of the other tools I used years
ago! Those required third-party dependencies for even the most simplest Markdown
setup. And there's no guranteed the dependencies would keep working considering
how often [Vercel](https://vercel.com) ships breaking changes to the Next.js
API.

That said, the project is structured in the following manner;

```console
.
├── .github
├── terraform/
│   ├── main.tf
│   └── # ...more Terraform code
└── web/
    ├── src/
    │   ├── # ...Astro website source code
    │   └── pages/
    │       └── index.astro
    ├── README.md
    ├── astro.config.ts
    ├── # ...more stuff related to the frontend
    ├── package.json
    └── tsconfig.json
```

The main directories of particular interest are: [`web`](./web) and
[`terraform`](./terraform) which contains the Astro source code and the
Terraform source code respectively. The former is meant for the website and the
former is for deployment and cloud resource management. The root of the project
also contains a couple other directories/folders and they are;

- [`.github`](./.github) containing configuration files used by GitHub for
  Dependabot, issue/pull request templates and much more.
- [`.precommit-config.yaml`](./.pre-commit-config.yaml) is used by the
  [Pre-Commit](https://pre-commit.com) framework to create
  [`git-hooks`](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
- The [ `.gitattributes`](./.gitattributes), [`.gitignore`](./.gitignore),
  [`.editorconfig`](./.editorconfig) files are used by Git and Text Editors
  respectively.
- The [`LICENSE`](./LICENSE) and the [`README.md`](./README.md) contain the
  licensing terms and conditions and the doucmentations for the project.
- [`Taskfile.yml`](./Taskfile.yml) contains various commands (or "_tasks_") for
  the [Task](https://taskfile.dev) runner.
- [`commitling.config.js`](./commitlint.config.js) contains the configurations
  for [`commitlint`](https://commitlints.org) for ensuring the project follows a
  standardised `git-commit` format.

That said, the next section of the documentation will help you get started with
developing/using the tools of the project to build your website (or contribute
to this project).

## Usage & Development Guidelines

This project is rather quite simple to get started with and has been thoroughly
documented wherever it is necessary. In other words, as long as you've the
necessary foundational experience and knowledge in the tech stack used in the
project you'll be fine. As a refresher, if you want to learn a bit about the
tools used in the project, following are the necessary resources you'll ever
need;

1. The
   [official Astro tutorial](https://docs.astro.build/en/tutorial/0-introduction)
2. The
   [official Terraform tutorial(s)](https://developer.hashicorp.com/terraform/tutorials)

Once you've completed the tutorials ensure you've the following tools installed
on your local development environment;

1. [Node.js](https://nodejs.org)
2. [Terraform](https://terraform.io)
3. [Task](https://taskfile.dev)
4. [Pre-Commit](https://pre-commit.com)

With the aformentioned tools installed and verified, follow these instructions
to get started with developing the website;

1. Fork the repository, so that you can have your own personal copy of the
   project. You'll be making Pull Requests to the "_main_" (or `upstream`)
   repository from your forked repository.

2. Clone the contents of the forked repository by running;

```console
git clone git@github.com:<YOUR-USERNAME>/jarmos.dev
```

3. Change directory to the cloned repository and then run the following command
   to install the necessary dependencies and the `git-hooks` for quality
   assurance checks.

```console
task setup
```

4. Once all the dependencies are installed and setup, run the development
   webserver using;

```console
task
```

5. After making proper changes to the source code, run the production build of
   the website for a sanity check;

```console
task preview
```

6. If the production build of the website looks sane and satisfactory, run the
   quality assurance checks by invoking;

```console
task qa
```

7. If all the QA checks passes, commit your changes and push them to your forked
   repository. From there you will be able to create a Pull Request which will
   then invoke a more comprehensive QA check. If those passes as well, your PR
   with all your changes to the repository will be merged and deployed to the
   production version of the website automatically!

During the entire usage and development phase if you stumble across any
issues/hurdles please don't hesitate to open a discussion/issue thread detailing
what your concers are and I'll be glad to help you out!

## Acknowledgements and Credits

I stood on the _shoulder's of giants_ when working on this project and without
whose help, inspiration and shared work, this project wouldn't have seen the
light of the day! Hence, following are a list of people who work has directly
helped me create the project in its current form:

1. [Tania Rascia](https://www.taniarascia.com) for inspiring me to create the
   website from scratch and with a pinch of personal creativity!
2. [Ryan Warner](https://www.warner.codes) for sharing the
   [Figma template](https://www.figma.com/proto/hjV8pCbbwGwAyzU5o4jPsp?node-id=0-1&mode=design&t=NeSCBHImrfqbHnfp-6)
   of the website in the public domain!

And in addition, the contributors of the project deserves some love and
attention too for pointing out the little mistaks, bugs and more I probably
missed out on when working on the project.

## Licensing Terms & Conditions

The entire project is based on transparency and the open-source initiative.
Hence everything related to the project are made available in the public domain
for scrutiny. The source code (available under the [`web`](./web) & the
[`terraform`](./terraform) directories) of the website are licensed under the
[MIT License](./LICENSE). And the literary content found under
[`we/src/content`](./web/src/content) in Markdown files and the rendered content
on the website - [Blogposts | Somraj Saha](https://jarmos.dev/blog) are all
licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0).

Hence, under the terms and conditions of the aforementioned licenses, you're
free to:

1. Copy & modify the contents of the website for commercial or non-commercial
   uses.
2. Distribute the source code as is made available in the repository or
   modified.
3. Share the literary contents after providing due credits to the original
   author.
