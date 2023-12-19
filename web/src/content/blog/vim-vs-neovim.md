---
title: "Vim or Neovim? Here is Why You Should Use the Latter!"
description:
  "Discover why Neovim excels over Vim! Faster, cleaner, and loaded with
  features like LSP and Lua scripting. Enjoy seamless transition for Vim users,
  faster performance with Lua, and user-friendly defaults. Neovim: the modern,
  minimalist text editor"
publishedDate: 2021-07-15
coverImage:
  url: https://ik.imagekit.io/jarmos/vim-vs-neovim.png?updatedAt=1702974992298
  alt: "Vim vs Neovim: Which to Use?"
---

If you ever heard of [Vim](https://www.vim.org) before, you would know all about
it’s forks that have popped up in recent years! There’s
[Neovim](https://neovim.io) (the most popular fork),
[LunarVim](https://github.com/ChristianChiarulli/LunarVim) (one of the most
promising fork) & countless others. And as is obvious, choosing the one right
one for yourself can be a difficult task (been there & done that).

So to help you decide, this article will shed light on some of the reasons to
choose Neovim over Vim. To be more specific, we’ll look into every day use cases
while comparing the two. Analysing everyday use cases is more relevant while
comparing consumer products anyway.

But before we dive into the real deal of the article, as usual a little bit of a
history lesson first.

Vim itself started out as an improved clone of the now antiquated
[Vi](https://en.wikipedia.org/wiki/Vi) by
[Bram Moolenaar](https://moolenaar.net/) way back in the early 90s. Moolenaar
himself overlooked the development & course of actions for Vim. Over the
decades, the Vim source code is starting to become archaic & hard to maintain.
It’s bloated, some of the code is unoptimized & it’s current set of features
hasn’t aged well either.

But, Neovim was rebuilt from scratch! Redundant & decades old code was weeded
out. And all the while the maintainers tried to provide the same power to the
users as Vim did. Although, it did come pre-packaged with “ _optional steroids_
“ to consume. More on it in the rest of the article!

With that said, let’s dive deeper & check out why you should use Neovim over Vim
today. Take due note though, this article isn’t intended as a jibe at Vim or
it’s loyal users. Rather we’ll try to analyse the differing features of the two
editors & see how useful they are on a day-to-day basis.

### Why is Neovim More Popular Than Vim

As mentioned earlier Vim is pretty old, as such it’s source code is archaic &
difficult to maintain. And this was a primary reason for the current dev team
for Neovim to fork Vim & set off on a journey of their own.

Unlike some of the rumours floating around Neovim wasn’t forked because “ _Bram
is a dictator_ “ & what not. Neither was Neovim created to give more power to
the community. But the latter is definitely an unintentional outcome of the fork
in a good way.

Since, Neovim was rebuilt from the ground-up, it opened up doors to;

1.  Adding useful features like
    [Language-Server Protocol](https://microsoft.github.io/language-server-protocol/)
    (LSP), an embedded
    [Lua 5.1](https://jarmos.netlify.app/posts/vim-vs-neovim/lua.org) (and
    LuaJIT) runtime & so on, more easily.
2.  Cleaner & optimized source code for easier maintainability & reduced load
    times.
3.  Straight-up better plugin development environment.
4.  Extending core Neovim capabilities through improved plugins if necessary.

And those were only a few good outcomes of forking the Vim source code. But in
reality, the list is never-ending & chances are, as Neovim matures over time,
there’ll be another reason to extend the list.

Some other equally prominent features include:

1.  The underlying Neovim API for plugin devs to use for building pretty much
    anything.
2.  The optional embedded Lua 5.1 environment is also a reason why Neovim is so
    loved by the community. If a user wishes to do, Neovim can be configured
    with Lua rather than VimScript.
3.  An inbuilt standard library which includes useful functions like
    `CheckHealth` and/or the global `vim` Object. These are used to check if a
    plugin has been set up correctly. Or to configure global Neovim settings.
4.  Comes pre-packaged with sensible default settings making the “_Vim
    experience_” more pleasant.

And if it’s not obvious already, Neovim is already miles ahead when it comes to
useful features. For example, choosing to configure Neovim with either VimScript
or Lua. Or heck if you desire, you can even use both side-by-side, the choice is
all yours!

With Vim, you would be stuck with the dreaded VimScript! While LSP capabilities
are supported through plugins, the experience isn’t as smooth & out-of-the-box
like it’s cousin.

With that said, let’s take a more detailed approach to some of the most used
features mentioned above.

### Neovim is Noticeably FASTER Than Vim

As mentioned earlier, one of the major reasons to fork Vim was it’s archaic
source code. Since Vim has been in existence for close to three decades it’s
source code is pretty bloated by now. It was hard to maintain & was much easier
to simply rebuild from scratch, so the devs did what was necessary.

Owing to that decision, the source code was cleaned & optimized. This is obvious
if you notice how faster Neovim is than its predecessor.

Rebuilding Neovim also opened up many doors towards developing handy features.
One & the most killer feature of the editor is the embedded Lua 5.1 ( _and
LuaJIT_) environment.

The devs also took other performance optimization course of action as well. One
of them included making Neovim run in an
[Event Loop](https://en.wikipedia.org/wiki/Event_loop). So, you can finally bid
goodbye to plugins that would hang earlier!

Besides that, the devs have also ensured backwards compatibility with VimScript.
So, if you’re a long-term Vim user who wants to try out Neovim, don’t fret,
you’ll be fine. You can configure Neovim to read your older `.vimrc` just fine
albeit with some trivial hacks here & there.

But what if you’re committed to using Neovim & are ready to take the dive? Then
I would suggest migrating your current VimScript configurations to Lua code
instead. You’ll notice an increased performance boost.

To give an idea of what sorts of performance boost I’m talking about here, I’ll
share my experience. My Neovim load times decreased from 500+ ms to 237 ms.
That’s a roughly ~50% improvement by simply migrating from VimScript to Lua!

One can only imagine how much faster it can perform if the config loading
process was optimized even further.

On the flip side though, configuring through Lua is an optional feature. So, you
needn’t feel obligated to “ _learn yet another language_ “. More on it in the
next section of the article.

### Option to Ditch VimScript & Embrace Lua

[One of the goals](http://neovim.io/charter/) of the Neovim team is to “
_develop first-class Lua/LuaJIT scripting alternative to VimL_ “. Staying true
to their words, the devs haven’t enforced ditching VimScript in favour of Lua.
And I doubt any of us would live to see that happen in our lifetime!

So, if you want to continue using your previous Vim configs, you needn’t fret at
all. But what if you definitely need Lua code, for example say configuring the
builtin LSP?

For situations like that, Vim `heredoc` will be at your rescue. You can embed
Lua code within VimScript with a syntax which looks something like this;

Example Lua code embedded within VimScript in the “init.vim” file

And you’re good to go out on your day without worrying it would break something
from your previous Vim configs. Vim would still know how to parse those code &
make sense of it.

Although, a bit of a personal opinion here, try not to use VimScript if you can.
Coding in Lua is a much pleasant experience. And even if you had to learn it,
the language has many real-life applications outside of a Vim environment. So,
it’s not like you would be wasting your time learning a redundant programming
language. If you do decide to start configuring Neovim with Lua, do give this “
[Guide to Using Neovim with Lua](https://github.com/nanotee/nvim-lua-guide) “ a
thorough read.

That said, Neovim’s embedded Lua environment’s usefulness takes proper shape
through it’s inbuilt standard library & API. If you’re either a plugin developer
or a regular Vim user, the standard library can be useful in many ways. It
packages many useful functions & commands to use for your day-to-day development
needs.

So, in the next section, we’ll take a more detailed look into it.

### The Inbuilt Standard Library & the API is 💖

Second on Neovim’s list of development goals is to create a suitable environment
of plugin authors. That way, the plugin authors could extend the core features
of Neovim with much ease. And the core team of devs achieved this feat by
creating the Neovim API layer & an accompanying “ _standard library_ “.

The underlying API layer exposes useful functions to the user for programmatic
control over Neovim. These functions are exposed through a global namespace
called `vim`.

As such, let’s say we want to configure Neovim to display the number column.
Then it’s as easy as writing `vim.api.nvim_set_option("number", true)` in an
`init.lua` ( _or_ `*init.vim*` _with some caveats_) file. And you're good to go!

Granted, a first glance on the global `vim` namespace might look confusing but
stay with me & I'll help you make sense of it.

The `vim` namespace exposes a couple functions for everyday use. Most notable
ones include the `vim.api`, `vim.lsp` & `vim.inspect` functions. There are a
couple more of them & explaining all them is out-of-scope for this article. But,
you can find a comprehensive list of these functions detailed in the "`*vim*`
_namespace section_" of the
[Lua for Neovim guide](https://github.com/nanotee/nvim-lua-guide).

To stay relevant to the context of this article, following are some of the most
useful functions exposed by the `vim.api` namespace:

1.  Functions for setting options like `vim.api.nvim_set_option()`. Or the
    `vim.api.nvim_get_option()` for getting the value of a global option. On
    similar lines, there are functions for Buffer-local and/or Window-local
    functions. These functions look like `vim.api.nvim_buf_set_option()` &
    `vim.api.nvim_win_set_option()` respectively.
2.  The “ _Vim experience_” is pretty much incomplete without customizing
    personalized key bindings. And , there’s a pretty nifty function for doing
    exactly that as well! The `vim.api.nvim_set_keymap()` function takes four
    parameters. The " _mode_", your custom key binds, the expression/default key
    binds & options ( _like "silent"_) to pass to it.
3.  Another function I found useful on a day-to-day basis is the
    `vim.api.replace_termcodes()`. It's used for escaping terminal & Vim
    keycodes. Since VimScript does it by default, you never have to worry about
    escaping stuff like `"\<C-n>"` times. But this doesn't work as expected when
    configuring through Lua code. Hence, this function can be pretty handy at
    times.

There’re many more of such functions & we barely scratched the surface of what’s
possible! For more information on the `vim` namespace, refer to the " _Lua for
Neovim guide_" mentioned above. The official documentation at `h: api` is also
quite handy for finding more info on the functions, the `vim.api` namespace
exposes.

With all that power in your hands, the sky’s pretty much the limit to extending
Neovim further than it’s core features. So, go figure it out yourself & don’t
hesitate sharing them with the Neo(Vim)community.

### Sensible Default Settings for a Better First-Time Experience

If programmatic configurations of your editor don’t sound interesting to you. Or
perhaps, you tried out Vim some time earlier & found it difficult to use? Or
maybe you didn’t want to spend a whole weekend trying to configure Vim for your
specific needs? Well for you, my friend, there’s good news. Reducing the
barrier-to-entry for first-time Vim users topped the development goals for the
Neovim devs.

So, what does it mean for the uninitiated?

It means, Neovim, out-of-the-box looks & feels good enough. It doesn’t need much
of any configuration & it’s usable for all your software development needs.
Granted this feature isn’t as interesting as Neovim’s other “ _killer features_
“ like inbuilt LSP. Or it’s programmatic config system through the embedded Lua
environment. But it’s still an important feature worth noting.

When you want an editor that serves your purpose, helps you complete every-day
tasks, you wouldn’t want to spend a day (or two) configuring it, wouldn’t you?
And if you’re someone who fall into this category of people, Neovim is worth a
try. Who knows, you might like it & stick with it for the rest of your dev
career.

### Final Words & Resources for Your Journey into Neovim-land

And now, before I answer the question, “ _Vim or Neovim: Which one to use?_ “.
Here’s a short summary of everything we talked about earlier:

1.  Why does Neovim exist in the first place? And how it affected the community.
2.  We now know, Neovim’s source code was cleaned, optimized & rewritten from
    scratch. Hence, it’s noticeably faster than it’s older cousin Vim.
3.  Allowing Neovim to be rewritten opened up opportunities to include many
    useful features like LSP, asynchronous execution, etc.
4.  Inclusion of a “ _standard library_ “ which augments the optional embedded
    Lua environment for configurability. Sensible default configurations to ease
    a first-time Vim user’s experience.

…and many more! The list is never-ending & what I listed up there is just the
cherry on top of the cake. These features are also what makes Neovim stand out
when compared to Vim. But, it shouldn’t come as a surprise if Vim supports most
if not all of Neovim’s features one day as well.

That said, you should use Neovim for reasons mentioned below:

1.  You need a terminal-based editor with stable cross-platform availability.
2.  You’ve been a long-time Vim user & find certain features of the editor like
    VimScript annoying & frustrating.
3.  You need modern IDE-like features like LSP support out-of-the-box and/or if
    you need some default configurations available without further tinkering.
4.  And finally, if you need a minimalist text editor which is modern, Neovim
    should be your go-to option.

Do you believe those were some valid reasons to try out Neovim, let me know what
you think!

_Originally published at_
[_https://jarmos.netlify.app_](https://jarmos.netlify.app/posts/vim-vs-neovim/)
_on July 15, 2021._
