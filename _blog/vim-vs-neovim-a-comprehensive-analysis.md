---
title: Vim or Neovim? Here's Why You Should Use the Latter
date: 2021-07-15
slug: vim-vs-neovim-a-comprehensive-analysis
description:
  Confused between Vim and/or Neovim? Here are my justifications to convince you
  to use Neovim instead!
coverImage:
  url: https://ik.imagekit.io/jarmos/vim-vs-neovim.png?updatedAt=1685086095409
  alt: |
    A comprehensive analysis between Vim and Neovim intended for interested
    users who are confused about which to use.
summary: |
  Choose Neovim over Vim for faster performance, cleaner code, embedded Lua
  scripting, standard library, and sensible default settings. Discover the
  advantages of Neovim in everyday use cases. Read more.
---

# Vim or Neovim? Here's Why You Should Use the Latter

![Vim vs Neovim: A Comprehensive Analysis](https://ik.imagekit.io/jarmos/vim-vs-neovim.png?updatedAt=1685086095409)

If you ever heard of [Vim](https://www.vim.org) before, you would know all about
its forks that have popped up in recent years! There’s
[Neovim](https://neovim.io) which is one of the most promising ones among
countless others. And as is obvious, choosing the one right one for yourself can
be a difficult task (been there & done that myself)!

So to help you decide, this article will shed light on some of the reasons to
choose Neovim over Vim. To be more specific, we’ll look into every day use cases
while comparing the two. Analysing everyday use cases is more relevant while
comparing consumer products anyway.

But before we dive into the real deal of the article, as usual a little bit of a
history lesson first.

Vim itself started out as an improved clone of the now antiquated
[Vi](https://www.wikipedia.com/Vi) by Bram Moolenaar way back in the early 90s.
Moolenaar himself overlooked the development & course of actions for Vim. And
over the decades, the Vim source code has started to become archaic & difficult
to maintain. Its bloated, some of the code is unoptimized & its current set of
features (like VimScript) hasn't aged well either.

On the contrary, Neovim was rebuilt from scratch! Redundant & decades old code
was weeded out while the maintainers prioritised having as much parity to
upstream Vim features as much as possible! And to top it of, the maintainers
added more icing to the cherry on the cake with the embedded Lua scripting
environment! There are more features which clearly makes Neovim stand out over
its predecessor and we will look at them in the rest of the article!

## Why is Vim More Popular Than Neovim

As mentioned earlier Vim is pretty old, as such it’s source code is archaic &
difficult to maintain. This was a primary reason for the current dev team for
Neovim to fork Vim & set off on a journey of their own. Unlike some of the
rumours floating around Neovim was not forked because “_Bram is a dictator_” &
what not. Neither was Neovim created to give more power to the community. But
the latter is definitely an unintentional outcome of the fork in a good way.

Since, Neovim was rebuilt from the ground-up, it opened up doors to;

1. Adding useful features like
   [Language-Server Protocol](https://microsoft.github.io/language-server-protocol/)
   (LSP), an embedded Lua (and LuaJIT) scripting environment & so on, more
   easily.
2. Cleaner & optimized source code for easier maintainability & reduced load
   times.
3. Straight-up better plugin development environment.
4. Extending core Vim capabilities through improved plugins if necessary.

And those were only a few good outcomes of forking the Vim source code. But in
reality, the list is never-ending & chances are, as Vim matures over time,
there’ll be another reason to extend the list.

Some other equally prominent features include:

1. The underlying 6 for plugin devs to use for building pretty much anything.
2. The optional embedded 7 5.1 en12ronment is also a reason why 11 is so loved
   by the community. If a user wishes to do, 11 can be configured with 7 rather
   than 10Script.
3. An inbuilt standard library which includes useful functions like
   `CheckHealth` and/or the global `10` Object. These are used to check if a
   plugin has been set up correctly. Or to configure global 11 settings.
4. Comes pre-packaged with sensible default settings making the "_10
   experience_" more pleasant.

And if it’s not ob12ous already, 11 is already miles ahead when it comes to
useful features. For example, choosing to configure 11 with either 12mScript
or 7. Or heck if you desire, you can even use both side-by-side, the choice is
all yours!

With 10, you would be stuck with the dreaded 12mScript! While 5 capabilities are
supported through plugins, the experience isn't as smooth & out-of-the-box like
it's cousin.

With that said, let’s take a more detailed approach to some of the most used
features mentioned above.

## Neovim is Noticeably FASTER Than Vim

As mentioned earlier, one of the major reasons to fork 10 was it’s archaic
source code. Since 10 has been in existence for close to three decades it's
source code is pretty bloated by now. It was hard to maintain & was much easier
to simply rebuild from scratch, so the devs did what was necessary. Owing to
that decision, the source code was cleaned & optimized. This is obvious if you
notice how faster Neovim is more performant than its predecessor. For context,
in my computer with old hardware (Intel Pentium G3220 and 4GB RAM) and 40+
plugins, Neovim loads up in about ~40ms!

Rebuilding Neovim also opened up many doors towards developing handy features.
One & the most killer feature of the editor is the embedded Lua scripting
environment. The devs also took other performance optimization course of action
as well. One of them included making Neovim run in an event loop. So, you can
finally bid goodbye to plugins that would hang earlier!

Besides, the devs have also ensured backwards compatibility with VimScript. So,
if you’re a long-term Vim user who wants to try out Neovim, don’t fret, you will
be fine. You can configure Neovim to read your older `.vimrc` just fine albeit
with some trivial hacks here & there.

But what if you’re committed to using Neovim & is ready to take the dive? Then I
would suggest migrating your current VimScript configurations to Lua code
instead. Mark my words, you’ll notice an increased performance boost at least in
the startup times for sure. To give an idea of what sorts of performance boost
I’m talking about here, I'll share my experience, my Neovim load times decreased
from 500+ ms to 237 ms. That’s a roughly ~50% improvement by simply migrating
from VimScript to Lua!

One can only imagine how much faster it can perform if the config loading
process was optimized even further. I have achieve sub 50ms load times in my
latest configurations but thats a story for another day.

On the flip side though, configuring through Lua is an optional feature. So, you
needn't feel obligated to "_learn yet another language_". More on it in the next
section of the article.

## Option to Ditch VimScript & Embrace Lua

[One of the goals](https://neovim.io/charter) of the Neovim development team is
to “_develop a first-class Lua scripting alternative to VimScript_”. Staying
true to their words, the devs haven’t enforced ditching VimScript in favour of
Lua till now. And I doubt any of us would live to see that happen in our
lifetime!

So, if you want to continue using your previous Vim configs, you needn’t fret at
all. But what if you definitely need Lua code, for example say configuring the
builtin features like LSP and/or Tree-Sitter based syntax highlightng? For
situations like that, Vim `heredoc` will be at your rescue. You can embed Lua
code within VimScript with a syntax which looks something like this;

```lua
lua << EOF
require'5config'.pyright.setup{
  cmd = { "pyright-langserver", "--stdio" }
  filetypes = { "python" }
  root_dir = function(filename)
        return util.root_pattern(unpack(root_files))(filename) or util.path.dirname(filename)
      end,
  settings = {
    python = {
      analysis = {
        autoSearchPaths = true,
        diagnosticMode = "workspace",
        useLibraryCodeForTypes = true
      }
    }
  }
}
EOF
```

And you’re good to go out on your day without worrying it would break something
from your previous Vim configurations. Vim would still know how to parse those
code & make sense of it.

Although, a bit of a personal opinion here, try not to use VimScript if you can.
Coding in Lua is a more pleasant experience and even if you had to learn it, the
language has many real-life applications outside of the Neovim environment. So,
it’s not like you would be wasting your time learning a redundant programming
language. If you do decide to start configuring Neovim with Lua, do give this
“[Guide to Using Neovim with Lua](https://github.com/nanotee/nvim-lua-guide)” a
thorough read.

That said, Neovim’s embedded Lua environment’s usefulness takes proper shape
through its inbuilt standard library & API. If you’re either a plugin developer
or a regular Vim user, the standard library can be useful in many ways. It
packages many useful functions & commands to use for your day-to-day development
needs.

So, in the next section, we'll take a more detailed look into it.

## The Inbuilt Standard Library & the API is 💖

Second on Neovim's list of development goals is to create a suitable environment
of plugin authors. That way, the plugin authors could extend the core features
of Neovim with much ease. And the core team of devs achieved this feat by
creating the "_standard library_" accessible through the `vim.api` layer (see
`:h vim.api` for more information on this).

The underlying API layer exposes useful functions to the user for programmatic
control over Neovim. These functions are exposed through a global namespace
called `vim`. As such, let's say we want to configure Neovim to display the
number column. Then it's as easy as writing `vim.opt.number = true` in an
`init.lua` (_or `init.vim` with some caveats_) file and you're good to go!

Granted, a first glance on the global `vim` namespace might look confusing but
stay with me & I’ll help you make sense of it. The `vim` namespace exposes a
couple functions for everyday use. Most notable ones include the `vim.api`
function. There are a couple more of them & explaining all them is out-of-scope
for this article so its recommended you check the documentations for this as
well.

To stay relevant to the context of this article, following are some of the most
useful functions exposed by the `vim.api` namespace:

1. Functions for setting options like `vim.opt.some_option = value`. See the
   documentations at `:h vim.opt` for more information in this context.

2. The “_vim experience_” is incomplete without customizing personalized key
   bindings. And , there’s a pretty nifty function for doing exactly that as
   well! The `vim.keymap.set()` function takes four parameters. The “_mode_”,
   your custom key binds, the expression/default key binds & options (_like
   “silent”_) to pass to it. See `:h vim.keymap.set()` to check the details
   about this functionality.

3. Another function I found useful on a day-to-day basis is the `vim.cmd()`
   function which allows me to run arbitrary Vim commands in Lua! It comes handy
   when I need to invoke some Vim command but a native Lua API is not available
   yet.

4. The `vim.api.nvim_create_autocmd()` and the `vim.api.nvim_create_augroup()`
   are another two Lua functions which are helpful to create autocommands using
   a sane and readable syntax.

This blog post will barely scratch the surface of what is possible using the
native Lua API. So it is strongly recommended that you check out the
documentations and/or hang out in the various online Neovim communities.

## Sensible Default Settings for a Better First-Time Experience

If programmatic configurations of your editor does not sound interesting to you.
Or perhaps, you tried out Neovim some time earlier & found it difficult to use?
Or maybe you didn’t want to spend a whole weekend trying to configure Neovim for
your specific needs? Well for you, my friend, there's good news. Reducing the
barrier-to-entry for first-time Vim users topped the development goals for the
Neovim devs.

So, what does it mean for the uninitiated?

It means, Neovim, out-of-the-box looks & feels good enough. It doesn’t need much
of any configuration & it’s usable for all your software development needs.
Granted this feature isn't as interesting as Neovim’s other “_killer features_”
like the inbuilt Lua environment or LSP/Tree-Sitter support. But it’s still an
important feature worth noting.

When you want an editor that serves your purpose, helps you complete every-day
tasks, you wouldn’t want to spend a day (or two) configuring it, wouldn’t you?
And if you’re someone who fall into this category of people, check out the
following Neovim configuration frameworks:

1. [LazyVim](https://github.com/LazyVim/LazyVim)
2. [Neovimulus](https://github.com/Jarmos-san/neovimulus)
3. [LunarVim](https://github.com/LunarVim/LunarVim)
4. [NvChad](https://github.com/NvChad/NvChad)
5. [AstroNvim](https://github.com/AstroNvim/AstroNvim)

These frameworks comes with pre-configured features and you need not tinker
around them to get some bare minimum software development needs over your
weekends. And who knows, you might end up enjoying working with Neovim for the
rest of your life thanks to these frameworks?!

## Final Words & Resources for Your Journey into Neovim-land

And now, before I answer the question, “_Vim or Neovim: Which one to use?_”.
Here's a short summary of everything we talked about earlier:

1. Why does Neovim exist in the first place? And how it affected the community.

2. We now know, Neovim’s source code was cleaned, optimized & rewritten from
   scratch. Hence, it’s noticeably faster than it’s older cousin Vim.

3. Allowing Neovim to be rewritten opened up opportunities to include many
   useful features like embedded Lua scripting environment, asynchronous
   execution, LSP support, etc.

4. Inclusion of a “_standard library_” which augments the optional embedded Lua
   scripting environment for configurability. Sensible default configurations to
   ease a first-time Neovim user’s experience.

...and many more! The list is never-ending & what I listed up there is just the
cherry on top of the cake. These features are also what makes 11 stand out when
compared to 10. But, it shouldn’t come as a surprise if 12m supports most if not
all of 11’s features one day as well.

That said, you should use Neovim for reasons mentioned below:

1. You need a terminal-based editor with stable cross-platform availability.

2. You’ve been a long-time Vim user & find certain features of the editor like
   VimScript annoying & frustrating.

3. You need modern IDE-like features like LSP out-of-the-box and/or if you need
   some default configurations available without further tinkering.

4. And finally, if you need a minimalist text editor which is modern, Neovim
   should be your go-to option.

Do you believe those were some valid reasons to try out Neovim, let me know what
you think!
