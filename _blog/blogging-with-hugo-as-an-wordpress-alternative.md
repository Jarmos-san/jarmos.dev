---
title: How to Create an Overpowered Blog With Hugo (As a Wordpress Alternative)
date: 2023-05-04
slug: blogging-with-hugo-as-an-wordpress-alternative
description:
  Create a blog with Hugo Static Site Generator as a Wordpress alternative &
  with added automation plus other superpowers
coverImage:
  url: https://picsum.photos/200/300
  alt: Hugo, the static site generator with biceps working out with dumbbells.
summary: |
  Learn how to set up a blog with Hugo, a user-friendly Static Site Generator.
  Hugo offers benefits like easy installation, content management, and SEO
  metadata. You'll also learn how to automate tasks with GitHub Actions and use
  a CMS backend like Forestry. Deploy your blog using Netlify for a global CDN.
---

# How to Create an Overpowered Blog With Hugo (as a Wordpress Alternative)

![Test Cover Image](https://picsum.photos/1200/640)

**Disclaimer**: This blog post suggest using Forestry as a CMS earlier but as of
May 25, 2023, Forestry is now [ TinaCMS ](https://tina.io).

A developer without a blog is like a fisherman without their fishing rod. While
it is possible to fish with just a thread & a hook, the rod makes life much
easier for the fishermen. In that context, Dan Bader summed it up well in his
article:
[3 Reasons Why You Need a Programming Blog](https://dbader.org/blog/3-reasons-why-you-need-a-programming-blog).

But, if you've read some of my previous articles, you would know choosing the
right tools to blog is no easy task. I wrote about such a dilemma I was in
earlier. Here's the article:
[_Medium vs Static Site Generators -- A Computer Vision Engineer's Dilemma_](https://medium.com/@jarmos/medium-vs-static-site-generators-1059c46aa59c).
Since publishing that article I had time to experiment with existing blogging
tools. And I reviewed each of them. You can read the review at --
[_A Review of Some of the Most Popular Static Site Generators_](https://medium.com/dev-genius/a-review-of-some-of-the-most-popular-static-site-generators-e473aa5fa2f9).
And if you are uninterested in reading those articles, here is a quick TLDR -
Static Sites Generators (SSGs) did not serve my needs!

Any way, on the flip side though, static sites provides the benefit of never
having to worry about server maintenance & security updates. Hence, they are a
much better alternative to Wordpress. Besides, websites/blog posts created using
SSGs cost almost nothing to write, host and maintain! Sure, if you are bent on
spending some cash maintaining it you are free to do so but the expenses will be
negligible to say the least!

So, in this article, I'll show how you can set up a blog with Hugo. The blog
will have a CMS, it will update itself & some more OP super powers to add along.
But do note, having some prior programming knowledge can be a bonus point but is
not a prerequisite. You can follow along with the instructions suggested in this
article & you'll be fine.

## Prerequisite Tools

The star of our article is [Hugo](https://gohugo.io) and trust me when I say it,
this piece of software is without a doubt one of the easiest to use SSG
available out there.

Besides Hugo, we'll also need a GitHub account to host the articles & other
tools as well. One of those tools include
[GitHub Actions](https://features.github.com/actions). Of the many
community-maintained GitHub Actions, we'll be using a couple of them. No blog
can be a Wordpress alternative without a Content Management System (CMS). So, to
deliver onto our CMS needs, we'll use the services from
[TinaCMS](https://tina.io). And we'll use [Netlify](https://www.netlify.com) to
deliver the generated static content. They use a global Content Delivery Network
(CDN) to deliver the content to our audiences.

Optionally, we could use
[Google Analytics](https://analytics.google.com/analytics/web/) for tracking
needs. But if you're a privacy concerned citizen, use
[Cloudflare Web Analytics](https://www.cloudflare.com/en-gb/web-analytics)
instead.

So, to sum up, here's the list of all the necessary tools & services we'll be
using:

- A Github repository to host the articles, themes & other files required by the
  tools we'll be using.
- A couple of GitHub Actions.
  - [peaceiris/actions-hugo](https://github.com/peaceiris/actions-hugo) to set
    up Hugo & generate the static content.
  - [nwtgck/actions-netlify](https://github.com/nwtgck/actions-netlify) to
    deploy the generated static content.
- An account on TinaCMS for managing our content in Markdown format.
- A Netlify account to deliver the static content to our audiences.
- And the optional Google Analytics account for tracking needs.

So, that said, ensure you're set up with all the tools mentioned above & then we
can get started.

## Using Hugo (With All Its Glory)

As mentioned earlier, Hugo is without a doubt one of the easiest Static Site
Generators available to use. The fact that Hugo has 50K+ stargazers shows how
useful it is! So, without wasting any more time, let's dive into seeing how to
use Hugo.

### Installing Hugo

First things first, is to install Hugo on your local machine. Unlike other
Static Site Generators Hugo has no dependency! But generators like
[Pelican](https://getpelican.com), [Gatsby](https://www.gatsbyjs.org) and/or
[Jekyll](https://jekyllrb.com) needs a local Python/Ruby runtime or a JavaScript
environment. With Hugo, all you need is the Hugo binary & you're good to go. The
"_installation_" procedure is also pretty simple. You need to add the binary to
system `PATH` & invoke the `hugo` command from anywhere in the Terminal. Do
note, editing each Operating System's PATH is quite different. Hence, do take a
thorough look at the official [installation docs][8].

Now ensure you installed Hugo by running the `hugo version` command on your CLI.
If everything works fine, you should see a similar output.

```sh
 Hugo Static Site Generator v0.80.0-792EF0F4 windows/amd64 BuildDate: 2020-12-31T13:37:57Z`
```

### Creating Your Site

I must say, installing Hugo while easy, it isn't the most fun part of the whole
process. So, let's get started with the fun parts.

You can generate a skeleton site (_which we'll build upon soon_) with the
`hugo new site .` command. Notice the `.` (_dot_) at the end of the command? It
tells Hugo to generate the skeleton site in the current directory. The command
generates a simple set of files & folders. Each of them serves a specific
purpose for Hugo. Here is what the directory structure looks like after
generating them.

```sh
  .                 # Current (or Root) directory
  ├───archetypes    # Stores preconfigured frontmatter metadata.
  ├───content       # Stores your Markdown articles.
  ├───data          # Stores data for used with templates and/or shortcodes
  ├───layouts       # Stores custom code snippets to override the used theme(s).
  ├───resources     # Generated resources (for eg processed images) are stored here.
  ├───static        # Holds static content like CSS/JS files, images, favicons, etc.
  ├───themes        # This is where you download & store a Hugo theme.
  └───config.yml    # Config file to configure Hugo. Supports YAML, TOML & JSON formats.
```

There is more to what Hugo generates as a skeleton site than what I can discuss
in one blog. So without delving into the details of the directory structure,
let's keep things minimal. That way, there'll be room for further
personalization and you can start delivering content at the earliest as well.

### Creating Content (The Actual Fun Stuff!)

As mentioned earlier using Hugo is drop-dead easy. Yet, any given Hugo project
can be as complicated as it needs to be. But regardless, you can start writing
content right away, all you now need is;

- Download a theme under the `themes` directory.
- Configure Hugo to generate your site with some site metadata for SEO needs in
  the `config.yml` file.
- Write content in Markdown under the `content` directory.

It's that simple!

Hugo boasts of some 300+ beautiful
[community maintained themes](https://themes.gohugo.io). You can download a
theme to your site's `theme` directory & Hugo will use it to generate the
contents of your site. And the easiest way to install a theme is to use "_Git
Submodules_". That way you can ensure the themes are updated as & when the theme
authors pushes a commit to it's repository. Installing themes is also very easy.
Running the `git submodule add <DOWNLOAD-LINK> themes/<THEME-NAME> --depth=1`
command is enough.

For SEO needs, you might also need site metadata. And Hugo takes care of it
out-of-the-box. You've to configure Hugo with a `config.yml` file. And in that
file you include the necessary details for the metadata. Hugo uses those values
to populate the metadata of your site.

And to get a general feel of what a config.yml file looks like, here's an
example;

```yaml
baseURL: "Your Site URL"
languageCode: "en-us"
title: "Your Website Name"
theme: "Theme Name"
paginate: 5
enableRobotsTXT: true
params:
  env: production
  title: Your Website Name
  description: "Description of your website."
  images: ["profile-pic.jpg"]
  defaultTheme: auto
  GoogleAnalyticsID: G-V0ZH6RS2BM
  assets:
    favicon: icons/favicon.ico
menu:
  main:
  # Menu items like Contact, About Me pages & so on
```

Do note, configuring the `config.yml` isn't limited to what I mentioned here.
Based on the theme you're using, you might/mightn't have to extend on it.

And at last, the content directory where you store the Markdown files for your
articles. You can organize your Markdown content into subdirectories for easier
maintenance & organization. For example, here's how mine looks.

```bash
./content
  ├───posts
  ├   ├───article-1.md
  ├   ├───article-2.md
  └───about-me.md
```

And with that information, you can start creating content right away.

Be sure to store all the articles in Markdown format under the content
directory. And if you're not familiar with Markdown, check out
[Markdown Guide](https://www.markdownguide.com).

Now that you've started creating content, it's time for your audience to read
them! And the next section is about delivering the content to our audiences...

## Deploying the Blog

Unlike Wordpress sites, static sites don't need a hosting server. This reduces
the surface area of potential security & maintenance mishaps. But without a
server to host the content how do we deliver them to our audience?

This is where Netlify's services come handy. They'll deliver our static content
over their global CDN. And their free tier services also come with some nifty
goodies. Some of those extra goodies include a domain, a build platform & many
more. But for reasons mentioned later, we won't use all their services.

So, ensure you've created a GitHub repository to host your site contents & a
Netlify account to start with. You'll need to perform a one-time operation on
the Netlify dashboard to create a new site. Refer to the
[Netlify documentations](https://docs.netlify.com) to learn more about the exact
process to do so.

Then push your fresh new site to the GitHub repository you created recently. And
that should trigger a Netlify build operation. You can now view your website at
an URL provided by Netlify which you can change to a custom domain if you wish
to do so later on.

Now each time you write a new article or push some aesthetic changes to your
site, Netlify will trigger a build. While it works & is fine for most users,
there are certain downsides. One of them is the slow & unoptimized build timings
(_often taking over 2mins to complete the build_). And considering Netlify
provides only 300 minutes of build per month, it won't be long before you run
out of it.

Besides, that way you're not utilizing Hugo's full potential. Which is why we'll
use some GitHub Actions instead. With it, we'll deploy our site & automate some
monotonous tasks as well!

The next section delves deeper into why & how we can achieve such a feat.

## Setting Up Automation & a CMS Backend

Creating & deploying the site was easy & fun. But it doesn't last long (_saying
from personal experience_). More so, when you add the theme as a submodule. You
can expect frequent updates for it.

But thanks to [Dependabot](https://github.com/dependabot), we can keep our
theme(s) updated at all times.

There's also the need for a Content Management System (CMS). What good is a
Wordpress Alternative, without a CMS, right? And we should also delegate the
build process to GitHub Actions instead of Netlify. This is a more efficient way
to deploy & maintain our site.

So that said, let's list out the remaining features we need to work on & start
working on them one-by-one.

- Setup & configure Dependabot to keep all dependencies for our site updated.

- Setup & use TinaCMS as the CMS backend.

- Configure & delegate the build process to GitHub instead of Netlify.

### Allowing Dependabot to Keep Dependencies Up-to-Date

The Dependabot and GitHub integration came as a godsend. Because of it, keeping
project dependencies up-to-date has never been easier. And guess what?
Dependabot can take care of Git Submodules as well! Which means your themes will
stay updated as soon as its author pushes some changes to it.

To configure Dependabot, you need a specific config file for it. This specific
file named `dependabot.yml` stays under the `.github` directory (_create it if
it doesn't exist yet_).

And this is how it should look like:

```yaml
version: 2
updates:
  # Update all the GitHub Actions we'll use soon
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
      time: "06:00"
    labels: ["github-actions", "automerge"]

  # Updates  all Git Submodules (the theme in this case)
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    schedule:
      interval: "daily"
      time: "06:00"
    labels: ["submodule", "automerge"]
```

With Dependabot configured, it'll now look for updates every day at 0600 Hours
UTC. And if there's any, it'll then open a PR with respective labels for GitHub
Actions & Git Submodules each. But that's pretty much the tip of the iceberg for
Dependabot configurations. You can find a more detailed configuration option in
the official docs.

With Dependabot set up, you no longer have to worry about manual update &
maintenance tasks.

### Setting Up TinaCMS as a CMS Backend

No static blog can become a true _Wordpress alternative_ without a CMS. And
that's what makes Wordpress attractive to most users without any technical
prowess. And as such, some users might not be comfortable writing their content
in Markdown. For them a web-based Rich Text environment is what works best.

Hence, we'll be using TinaCMS's backend CMS services. There are alternatives
like [Contentful](https://www.contentful.com) (_one of the most popular one_) &
[Netlify CMS][14]. But, from personal experience I found TinaCMS to be the
easiest to setup & configure.

The things you can do with Hugo & TinaCMS is beyond the scope of this article. I
could write another full-blown article on this topic alone. So, keeping this
article rather short & act as a guide for interested readers, here's a gist of
how to set up 19.

1. Ensure you've TinaCMS account & your site is "_added_" to their services.
2. Configure the settings of the CMS from the Admin panel.
3. Login to your site's Admin panel by navigating to `<YOUR-SITE-URL/admin>` &
   start writing your content in Rich Text (_you can write in Markdown as well
   if you prefer_).

TinaCMS has a [guide][1] to set up their CMS with Hugo, do check it out as well!

### Automation & Delegating Build Task to GitHub

While there's nothing wrong in using Netlify to build the site, it has some
limitations. A major one being, it's slow & unoptimized build times (_it took
over 2mins for my site to build_). With Netlify's limited 300 build mins per
month, it won't take long before the free quota is used up.

So, to make the most out of Hugo's potential, you should use GitHub Actions.
With it, you can build your site in <1 mins (_usually takes 20-40 secs on
average for mine_).

Besides, compared to Netlify, GitHub provides 2000 build mins per month! So,
coupled with less build times & a huge build mins quota, you won't have to worry
about builds not triggering 😊.

Also, having all tools under one roof makes maintenance much easier to handle.
So, let's peruse through what we need to do automate some of the build tasks;

1. First thing first is to ensure you've a `netlify.toml` config file under the
   root directory. The Netlify GitHub Action will use it to deploy the website
   to Netlify's CDN. The file usually looks something like the following;

   ```toml
   # Post Processing Settings
   [build.processing]
     skip_processing = false
   [build.processing.css]
     bundle = true
     minify = true
   [build.processing.js]
     bundle = true
     minify = true
   [build.processing.html]
     pretty_urls = true
   [build.processing.images]
     compress = true
   ```

   As is customary, the Netlify documentations has more information on this
   particular configuration file, so its recommended to refer to it.

2. To automate some more monotonous tasks, add a `build.yml` workflow file.
   Place it under the `.github` directory. And add the following content to the
   `build.yml` file.

   ```yaml
   name: Netlify Deploy

   on: push

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
           with:
             submodules: true
             fetch-depth: 0
         - name: Setup Hugo
           uses: peaceiris/actions-hugo@v2
           with:
             hugo-version: "0.80.0"
         - name: Generate Static Content
           run: hugo --minify
         - name: Deploy to Netlify
           uses: nwtgck/actions-netlify@v1.1
           with:
             publish-dir: "./public"
             production-branch: dev
             production-deploy: true
             github-token: ${{ secrets.GITHUB_TOKEN }}
             deploy-message: "Deployed with GitHub Actions"
             enable-pull-request-comment: true
             enable-commit-comment: false
             enable-commit-status: true
             overwrites-pull-request-comment: true
             netlify-config-path: ./netlify.toml
           env:
             NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
             NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
           timeout-minutes: 1
   ```

   This file instructs GitHub Actions to use two workflows for deployment tasks.
   It'll set up Hugo, generate the static content & deploy it to Netlify.
   Further, it's triggered on every push & PR event.

That said, I look forward to how you use Hugo to share your amazing content to
the rest of the world, so please feel free to reach out to me if needed!
