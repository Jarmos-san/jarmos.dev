---
title: Personal Website
description: |
  The personal website of Somraj Saha where he shares his knowledge
  and experience as a self-taught Full-Stack Software Engineer.
coverImage:
  href: ""
  alt: ""
slug: personal-website
---

# Personal Blog

The website you are on currently is my personal website where I share my
knowledge, opinion & experience as a self-taught Software Engineer. The project
is built in the confines of the open-source community & you're free to check out
the source code.

## Why Does the Project Exist?

I started blogging around 2018 on Medium & then when I stumbled across [Static
Site Generators][1] (SSGs). Hence I decided to create my own website using a
couple of such SSGs. The first attempt was using [Pelican][2] because Python &
its ecosystem was my background then. The ready-to-use themes available for use
with Pelican felt like they were made during the early 2000s. So, I briefly
experimented with [Gatsby][3] for a while before choosing to use [Hugo][4] with
the [PaperMod][5] theme.

Unfortunately, none of those tools served certain aspects which I couldn't live
without during my blogging journey. Here's a list of some such features which
were either not supported by the previous earliers or were difficult to
implement on:

1. Complete ownership of the project was the biggest concern I had while using
   the tools mentioned above. Medium was a proprietary pay-walled platform, SSGs
   relied on themes which often broke between updates for various reasons. The
   list is non-exhaustive but the gist is, for long-term blogging its necessary
   to "own your platform" & customise to suit your needs.
2. I need the website to be fast & properly built for SEO which most SSGs
   provided out-of-the-box so does [React.js][6] (_if developed with proper
   concern_).
3. Provide a completely transparent, ethical, free access to the content I
   publish online. Blogging on Medium was a major hurdle to achieve that goal.
   While the platform provided the highest engagement rates right off-the-bat
   but only if a specific content was put behind a paywall.

The reasons for developing a personal website from absolute scratch is
never-ending & it might be difficult to share everything here, so be sure to
check out the [source code on GitHub][7] instead.

## Technology Stack Used to Build the Project

The project uses the following technology stack:

- [Next.js][8] to build the [React.js][9] based frontend UI/UX for speed & other
  [Single Page Application (SPA)][10] features.
- [TypeScript][11] for a better deveoper experience.
- [TailwindCSS][12] & [Flowbite][13] (_a TailwindCSS-based React.js component
  library_) to style the frontend.
- [Vercel][14] for hosting the website while [GitHub Actions][15] takes care of
  the CI/CD requirements.

For more information on the developement process of the project, check out the
source code repository.

<!-- Reference Links -->

[1]: https://www.cloudflare.com/en-gb/learning/performance/static-site-generator
[2]: https://getpelican.com
[3]: https://www.gatsbyjs.com
[4]: https://gohugo.io
[5]: https://adityatelange.github.io/hugo-PaperMod
[6]: https://www.reactjs.org
[7]: https://github.com/Jarmos-san/personal-website
[8]: https://nextjs.org
[9]: https://reactjs.org
[10]: https://en.wikipedia.org/wiki/Single-page_application
[11]: https://www.typescriptlang.com
[12]: https://tailwindcss.com
[13]: https://flowbite.com
[14]: https://vercel.com
[15]: https://github.com/actions
