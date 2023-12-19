---
title: "Should You Use Next.js?"
description:
  Explore the realities of Next.js for web development. Learn its out-of-the-box
  features, optimized React.js components, and SEO improvements. Discover
  popular use cases from eCommerce to content marketing. Follow for updates on
  cons and optimization techniques.
publishedDate: 2022-02-12
coverImage:
  url: https://ik.imagekit.io/jarmos/should-you-use-nextjs.png?updatedAt=1702974989276
  alt: Should you use Next.js for building your projects?
---

I was introduced to [Next.js](https://nextjs.org) about a year ago when I
started my journey to learn "[Web Development](https://web.dev)". I didn't know
much about the framework, I wasn't told it was based on
[React.js](https://reactjs.org). And neither did I know how would the framework
help me build the products I wanted to build.

Hence over the couple of months I did learn quite a few intricacies of the
framework. I realised even though the framework is advertised to be a packaged
solution for a full-stack development experience, the reality is far from the
truth. The framework isn't a one-stop solution to building web apps, it does
come with a couple of compromises. And I hope to educate you on when choosing
Next.js is the right choice

## What's Next.js & What's With It's Hype All About

As I mentioned already Next.js is a frontend framework based on
[React.js](https://reactjs.org). And it was created at
[Vercel](https://vercel.com) with the primary focus on building & shipping
products real quick. Vercel advertises the framework by promising to deliver a
splendid Developer Experience (DX) besides other client-side goodies. And after
using the framework for a while I can say Vercel does live up to its promise.

That said, the framework's Unique Selling Points (USPs) are:

1. Its out-of-the-box [Webpack](https://webpack.js.org) configuration which
   allows the framework to perform some heavy-weight tasks like
   [bundling](https://webpack.js.org/concepts/)/[compiling](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler),
   enabling
   [file-system based routing](https://nextjs.org/docs/routing/introduction) &
   [much more](https://nextjs.org/docs/basic-features/pages)!

2. The well optimised React.js components like the
   [`Image`](https://nextjs.org/docs/basic-features/image-optimization),
   [`Script`](https://nextjs.org/docs/basic-features/script) &
   [`Link`](https://nextjs.org/docs/api-reference/next/link) components.

3. Improved factors affecting
   [Search Engine Optimisation](https://developers.google.com/search/docs#what-is-seo)
   (SEO) by making the most out of
   [Static Site Generation](https://web.dev/rendering-on-the-web/#static-rendering)
   (SSG) &
   [Server Side Rendering](https://web.dev/rendering-on-the-web/#server-rendering)
   (SSR) capabilities.

If you instead chose to work with React.js instead, you would've had to write a
lot of boilerplate code as well as use some extra packages like
[React Router](https://reactrouter.com) & what not. On top of it, React.js is
meant to create
[Single Page Applications](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
(SPAs) which are notoriously known
[for being SEO "**unfriendly**"](https://news.ycombinator.com/item?id=30528473)!

Next.js attempts to resolve quite a few of those concerns Web Developers
generally have when building a React.js-based product. So, in the next section,
let's take a look at how the frameworks helps the developer fix some of the said
issues.

## How Does Next.js Attempt to Resolve Existing Issues

The previous section of the write-up shared a brief touch on some of the core
features of the framework which were the driving reason behind its massive hype.
But under-the-hood how does the framework's features work which React.js by
itself can't provide?

In this section of the article, let's attempt to understand the core Next.js
features a little better.

### The Out-of-the-Box Webpack Experience

Under the hood Next.js is powered by Webpack for almost all of the heavy-lifting
operations like optimisation tasks, routing & static generation. It does provide
a means to
[customise that in-built Webpack configuration](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config).
But I can say from personal experience, you rarely ever need it (_unless you
know what you're supposed to do_)!

Suffice to say, for someone who doesn't know how to configure Webpack very well,
Next.js is next to a godsend (_no pun intended_ 😅)!

**NOTE**: Since [Next.js v12.x](https://nextjs.org/blog/next-12), the framework
depends on [Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release)
which brings about improved optimisation & other goodies like faster build times
& much more!

### Pre-Developed React.js Components

Perhaps the second-most important factor behind the Next.js hype are the
pre-developed React.js components like `Image`, `Script` & `Link` components.
These components were built with optimised standard practices in mind. And I bet
you, using them in your product will bring significant performance improvements
which you might notice right away!

For more context, the `Image` & the `Script` components, uses recommended
techniques like
"[_lazy-loading_](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)"
to only load static assets when absolutely necessary! The `Link` component on
the hand
"[_prefetches_](https://developer.mozilla.org/en-US/docs/Glossary/Prefetch)" the
contents of a hyperlinked web page in the background. In doing so, clicking an
URL feels like navigating around a native application rather than a website.

The Next.js developers (_and the community_) are also actively improving/adding
more such components, so I suggest checking out the official documentations for
more information.

### Static Generation and/or Server Rendering Capabilities

By far the most important feature & the only which made Next.js as popular as it
is today is it's hybrid approach towards both static generation & server-side
rendering capabilities! The framework provides two asynchronous functions -
`getStaticProps` & `getServerSideProps`. Depending on the use case, these two
functions are responsible for fetching & serving data either statically or from
the server respectively.

Now discussing how those functions work & how they should be used is beyond the
scope of this article. But be sure to follow me to stay updated on an article
I'm working to discuss those two functions more comprehensively.

Regardless the gist is, you get to choose which approach you would like to take.
Its also possible to mix-and-match both capabilities in a single website! Pretty
nifty if you ask & no wonder, the framework picked up pace so fast.

## Where to Use Next.js?

The previous section of the write-up discussed some of the core features of
Next.js in details (_but not as much detail as I would've preferred!_). And
reading about the features I bet it piqued your interest & you would prefer
jumping ship right away. But hold on to your horses & make a decision after
reading this section. This section will give you an idea if Next.js is the right
choice for your requirements.

So, let's see what're some of the popular use cases where the project can
benefit from the core Next.js features.

### eCommerce Websites

Hands down by far the best frontend framework to build eCommerce websites is
Next.js! It's hybrid static & server rendering capabilities means you can choose
to statically deliver certain pages of the site like the product or the landing
page. While other pages like the pricing information pages, the reviews & such
can be server rendered!

The gist is pre-render the pages & assets which doesn't change (_or need to
change_) often throughout the lifecycle of the eCommerce site. And render other
information like product reviews, pricing information, discount offers & such on
the server before delivering it to the user.

### Blog & Content Marketing Products

Next.js is pretty capable of building blog sites & other related content
marketing products! For example, I'm working on
[rebuilding my personal website](https://github.com/Jarmos-san/personal-website)
from scratch with Next.js. You can hook up the site to a
[Content Management System](https://en.wikipedia.org/wiki/Content_management_system)
(CMS) like [Hygraph](https://hygraph.com) (_formerly GraphCMS_). Or even use
[Markdown](https://www.markdownguide.org) to author version-controlled content
on [GitHub](https://github.com). You can then use a hosting provider like
[Vercel](https://vercel.com) to build/host the frontend.

Since Next.js is nothing more than a [Node.js "application"](https://nodejs.org)
functionality-wise, what you can possibly do with the framework is limited by
the capabilities of Node.js & your imagination!

Data fetching & pre-rendering with Next.js is a complex topic & as such deserves
a standalone article of its own. But rest assured I'll be back with yet another
comprehensive write-up on this same topic! So, don't forget to follow me for
future updates.

### Internal Dashboards or Related Microservice-based Products

So far we only discussed the frontend aspects of Next.js & rightfully so. I mean
who would expect a React.js-based framework to have backend capabilities, right?

Well surprise! Next.js allows you to also build API endpoints using a backend
framework like Express.js as well!

As for how exactly does the frontend framework's backend capabilities work, that
will have to wait for another write-up since its a tad bit out-of-scope for this
article. But for now, my suggestions would be to head over to the official
documentations. And you'll find a more comprehensive discussion there about the
"[_API Routes_](https://nextjs.org/docs/api-routes/introduction)" which Next.js
supports.

But if you want to take a look at some real-world examples of such "_full-stack
applications_" built with Next.js, take a look at "[Umami](https://umami.is)".
It's an open-source analytics alternative to Google Analytics. And I personally
use to track usage data for my personal website as well!

## Final Notes on Next.js & its Usage

While Next.js does come with a **LOT** of attractive features & especially
features which improves the developer experience manifold, like every other
software, Next.js comes with compromises as well! This write-up shed lightly
mostly on pros of using Next.js. So, if you want to read a more comprehensive
write-up on the cons of Next.js stay tuned for future updates.

In a future article I plan on discussing how Next.js suffers from issues with
caching & displaying old data to the users. All while the data has already been
updated in the backend server. And a couple of hacky solutions to deal with such
situations.

We also **VERY** briefly touched on the data fetching capabilities of Next.js
like when to use or not use the `getStaticProps` or `getServerSideProps`
functions. Using these functions properly & in ways they were intended to be
used is what will ultimately ensure if your product is optimised or not!

Pre-rendering static assets is also known to be a painful experience especially
if you're statically generating thousands if not hundreds of pages. So again
knowing where to use server rendering or static generation is paramount.

All-in-all the
[talented developers at Vercel](https://github.com/orgs/vercel/people) are
pretty good at what they're doing with Next.js. And hence I envision a promising
future ahead for the framework! The community around the framework is also quite
mature & feature requests are reviewed & merged every other day.

Hence, at the end of the day, I can't recommend Next.js for building your next
startup business around with. And I hope, my article helped you make a decision
about choosing the right tech stack in one way or the other. If it did help you
out, feel free to
[reach out to me](https://jarmos.vercel.app/about#contact-details)!
