---
title: "Lessons Learned from Rebuilding my Personal Website"
description:
  Explore a developer's multi-year journey in building and evolving a personal
  website. Learn about the tools used, the drawbacks encountered with platforms
  like Medium and Pelican, and valuable lessons on choosing the right technology
  for a successful project.
publishedDate: 2023-12-19
coverImage:
  url: https://ik.imagekit.io/jarmos/lessons-of-rebuilding-personal-website.png?updatedAt=1702974992236
  alt: Lessons learned from rebuilding my personal website
---

If you know me well, you would know I advocate for blogging as a programmer
every now & then! The benefits for doing so are countless & you never know what
kind of prospects you might land on simply because of your blog! But documenting
all of the said reasons deserves its own write-up so I'll reserve this topic for
another article.

Any way, I started writing some years ago in hopes of sharing my knowledge,
expertise & skills with the other self-taught Software Engineers on the
Internet. In doing so I hoped (_and still do so_) it helps someone out there
looking for an answer to the queries they might have.

This's article is similar in context as in, through this article I hope to teach
you a thing or two about creating a personal website/blog from scratch! The
article will be a multi-part series where each individual write-up focuses on an
individual aspect of developing a real-world frontend project. The series is a
source of documentation for the entirety of my experience recreating my personal
website/blog using frontend tools like React.js & related technologies.

The series will also shed light on the decision-making factors involved in
creating a production-grade project. So, grab yourself a cup of coffee before
reading the series because it'll take you a while to absord every bit of
information I have to share here.

## An Introduction to the Tools & Services Used So Far

If I can recall it right, I wrote my first piece of article way back in 2016! It
wasn't my proudest creation but it was definitely something which got me
started. A good six years later I can't find them anymore, _I probably deleted
those from embarrassment_. 😅

These days I'm more wary of how I maintain backups of my content articles. So,
rest assured a solid system of having backups is one of the most important
option in my workflow today! In a later section of the series we'll take a more
in-depth explanation on how I backup my articles today.

That said, like any other beginner blogger who usually starts out with an hosted
option like [Blogger](https://www.blogger.com/about) or
[Wordpress](https://wordpress.com), I wrote my first on
[Medium](https://medium.com). Medium served me quite well & this is by far the
longest platform I used side-by-side with other alternatives. If you're
interested in checking out my old (_and now unmaintained profile_), feel to
[check it out](https://jarmos.medium.com).

Medium was perfect for my initial requirements as I didn't know much about
[Search Engine Optimisation (SEO)](https://en.wikipedia.org/wiki/Search_engine_optimization)
& it's not like I cared about it as much back then. Regardless, I soon stumbled
across a category of tools called
[Static Site Generators (SSG)](https://www.cloudflare.com/en-gb/learning/performance/static-site-generator)
from a online community I was part of.

There I learned about [Gatsby](https://getpelican.com) which was based on
[React.js](https://reactjs.org) & [Pelican](https://getpelican.com), based on
[Python](https://www.python.org). I didn't know JavaScript (_let alone
React.js_) hence Pelican was the next choice I settled on for a while.

Pelican served me well (_after Medium_) & a majority of my older write-ups were
created using it. I ditched Pelican as well due to it's bad developer-experience
(_more on it later_) before moving over to [Hugo](https://gohugo.io) sometime
around 2019.

Although Hugo did have its own shortcomings but it excelled at what it was
supposed to do! Its also supported by a **HUGE** community & some dedicated
maintainers as such, help was quick to come by. It also supported one of the
largest support for community driven themes & I used the
[PaperMod](https://adityatelange.github.io/hugo-PaperMod) theme until
[something broke](https://github.com/adityatelange/hugo-PaperMod/issues/624).

The theme maintainer refused to provide a fix, neither was a he willing to help
me debug the issue further & the discussion was closed promptly. This was the
moment I realised the need to develop a website where I had absolute control
over every decision-making process of the project.

Fret not but we will take a more detailed look on to the decision-making process
for the project as well. But for now the next section of this article sheds a
brighter light on the drawbacks of the aforementioned tools & why I moved away
from them.

## The Major Drawbacks of the Previously Mentioned Tools

As a Software Engineer myself I deal with the consequences of compromises &
advantages of the tools I use on a daily basis. And hence, I'm well aware of
each of my tool's shortcomings. It's simply impossible to stumble across a
seemingly utopian tool which _serves my needs to the T_. Well at least I have
not come across any such tools yet. But rest assured I'll share my thoughts &
experiences of working on such a tool if I ever come across one in the first
place.

That said, let's quickly tread over the specific details of the previously
mentioned tools which didn't work out for me. And I'll also attempt to justify
my reasons to ditch those tools in favour of an alternative in this section of
the article.

### Medium's Paywall & the Lack of a Developer-Friendly WYSIWYG Editor

Medium seemed like "_the perfect platform_" to blog on for me & I was so wrong
to assume so! The platform primarily caters to its the western markets (_more on
it later_). And it's WYSIWYG editor is **BAD** for technical writing (_I can't
emphasise enough on how bad it is!_).

For more context, try writing some code snippets on the platform & you'll see
what I mean!

That said, I stumbled across the following issues when writing on Medium:

1. Lack of native support for code snippets & inline code.

2. The platform rolls out it's own WYSIWYG editor & doesn't support even a
   little bit of Markdown!

3. Code snippets are required to be embedded from a third party source like
   [GitHub Gists](https://gist.github.com). It cluttered my GitHub profile & the
   embedded code snippets doesn't look nice either.

4. Some of the write-ups were put behind a paywall when the
   [Medium Partner Program](https://medium.com/earn) wasn't even
   [available in my country](https://help.medium.com/hc/en-us/articles/115011694187-Getting-started-with-the-Partner-Program)!
   Which means even if I wanted to I couldn't monetise my content.

Fortunately, Hashnode proved to be a good alternative & I
[wrote about it](https://jarmos.medium.com/moving-to-hashnode-to-share-better-content-as-a-technical-writer-5ba2d171a3da)
earlier. And so far, Hashnode's turned out to be an absolute pleasure to write
on! Sure, the traffic to my content has taken a massive hit (_the monthly views
went down from ~5000 to ~1000_). But I believe that's alright for me & I'll
revert back to the old numbers when my finished product is complete!

Putting aside Medium & Hashnode both, I did try out a couple off SSGs before
settling down on Hashnode. I mentioned a couple of them before, so the next
section discusses my experience with one of the first SSG I tried.

### Pelican's Weird Take on Distributing Themes & Much More

Pelican was a choice in my list primarily because of my expertise in Python. The
SSG is developed in Python, the maintainers of the project were active too & it
supported hundreds of themes.

The issue with it though were as follows:

1. The tool was developed in a monorepo _side-by-side with the themes_ which
   means I had to perform a complete deep clone of everything there is before I
   could use a theme!

2. Pelican used [Jinja 3](https://jinja.palletsprojects.com) in backend for the
   templating needs which is fine but it makes the website look antiquated and
   from the early 2000s.

3. The tool is old, put together using hacky CLI-commands & its age is more
   apparent from the bad
   [Developer Experience (DX)](https://en.wikipedia.org/wiki/User_experience#Developer_experience).

Pelican is a nice tool for those who're using it since ages & is content with
it. But it didn't pique my interests at all with the bad DX & the lack-lustre
support for themes. And hence Hugo came to me like _the knight in a shining
armour_. It's community support & by far the largest collection of available
themes is what attracted me towards it.

So, let's learn a bit more about Hugo in the next section & we'll also try to
understand why even Hugo didn't serve my needs towards the end.

### Hugo's Learning Curve is Too Steep for Non-Golang Devs

Hugo is built using [Golang](https://go.dev) & is actively developed by
[Bjørn Erik Pedersen (aka "_bep_")](https://bep.is) among other full-time
contributors. It uses [Go Templates](https://pkg.go.dev/text/template)
behind-the-scenes which is what makes Hugo as powerful as it is right now.
Besides, the powerful Hugo backend, there are
[hundreds of officially supported themes](https://themes.gohugo.io) (_and a
quick Google Search will help you find more unofficial ones_).

That said, the issue I had with Hugo was it's steep learning curve! Any little
customisation I had to perform in my website required me to have some level of
proficiency with Go Templates. And if your preferred theme didn't bother
documenting the exact procedure to customise it then you were out of luck!

And guess what?! You'll barely stumble across themes which are well-documented &
well-maintained.

I was using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme
for the longest time & I was quite happy until
[it broke](https://github.com/adityatelange/hugo-PaperMod/issues/624). The
author was unwilling to fix the issue nor was he cooperative about debugging it
with me.

This was the point when I realised I need to build something of my own & from
absolute scratch.

### Gatsby's Modularity was a Major Turn Off

Gatsby caught my attention back then primarily because they advertised the tool
as an SSG powered by React.js. Following on the footsteps of Hugo, they also
supported [a ton of beautiful themes](https://themejam.gatsbyjs.org/showcase).
And on top of it you can extend the core behavioural features using
[officially supported Gatsby plugins](https://www.gatsbyjs.com/plugins) as well.

While Gastby's _plug-and-play_ approach sounds nice on paper, it isn't so
especially if you're concerned about software stability. Except the
[Gatsby Core](https://github.com/gatsbyjs/gatsby) & perhaps a couple other
official themes/plugins everything else is community maintained.

How long & what kind of support will you receive in case something breaks in
your website is left on the whims of the [NPM](https://www.npmjs.com) package
maintainer. If the
[author ever has some malicious intent](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code),
only God can save your project then.

Considering the hundreds if not thousands of hours I'll probably spend on my
website, the fact that it heavily relies on a flimsy package is scary. My
distraught was even more solidified knowing I would have to resort to multiple
unofficial & individually maintained "_plugins_" to extend the core Gatsby
features.

Unfortunately, in JavaScript & frontend world, this scene is more common than
you can imagine. And the modular approach Gatsby went for only proved
detrimental for them in my use case.

## Summarising the Lessons Learned

All in all I spent around 4-6 years simply working to deploy & experiment
different versions of my personal website using various tools. As you can see,
not all of them served my needs but I learned a thing or two from each of those
tools regardless. And that I believe wasn't a waste of time, in fact what I did
was based on the [Agile principles](https://agilemanifesto.org/principles.html)
of a
[Software Development Life Cycle (SDLC)](https://en.wikipedia.org/wiki/Systems_development_life_cycle)
any way!

So, to summarise everything I discussed in this write-up, here are my learning:

1. It doesn't matter how shiny a product is, as long as it's DX doesn't stand up
   to its mark, that tool will always be _second in the list of choices_.

2. Security & stability is equally important for the long-term sustainable
   development of a project. What's the point in spending hours after hours
   trying to fix issues a dependencies introduces rather than develop the core
   features?

3. Irreversible roadblocks will show up if not today then tomorrow for sure, so
   it's best to be prepared for that moment. And restarting the project from
   scratch with the newfound knowledge shouldn't be seen as a failure.

These lessons helped me grow as a better self-taught Software Engineer & it also
taught me how to gain some foresight in to the success of a project. And I hope
to implement these soft skills not only to my future projects but also to my
future prospective employees/clients.

That said, this is only the beginning of a series I plan on writing, so stay
tuned for more updates on this context! But feel free to reach out to me if you
would like to discuss your experience building your own personal website & the
tools you used.
