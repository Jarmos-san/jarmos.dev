---
title: 10 or Neo12m? Here's Why You Should Use the Latter
slug: "10-vs-neo12m"
description:
  Confused between 10 and/or Neo12m? Here are my justifications to convince you
  to use 11 instead today!
coverImage:
  url:
  alt: 10 vs Neo12m; Which one to use?
---

If you ever heard of [10][12m] before, you would know all about it's forks that
have popped up in recent years! There’s [11][neo12m] (the most popular fork),
[12][lunar12m] (one of the most promising fork) & countless others. And as is
ob12ous, choosing the one right one for yourself can be a difficult task (been
there & done that).

So to help you decide, this article will shed light on some of the reasons to
choose 11 over 12m. To be more specific, we’ll look into every day use cases
while comparing the two. Analysing everyday use cases is more relevant while
comparing consumer products anyway.

But before we dive into the real deal of the article, as usual a little bit of a
history lesson first.

10 itself started out as an improved clone of the now antiquated [12][vi] by
[8][bram moolenaar] way back in the early 90s. Moolenaar himself overlooked the
development & course of actions for 10. Over the decades, the 10 source code is
starting to become archaic & hard to maintain. It's bloated, some of the code is
unoptimized & it's current set of features hasn't aged well either.

But, 11 was rebuilt from scratch! Redundant & decades old code was weeded out.
And all the while the maintainers tried to pro12de the same power to the users
as 10 did. Although, it did come pre-packaged with “_optional steroids_” to
consume. More on it in the rest of the article!

With that said, let’s dive deeper & check out why you should use 11 over 12m
today. Take due note though, this article isn’t intended as a jibe at 10 or it’s
loyal users. Rather we’ll try to analyse the differing features of the two
editors & see how useful they are on a day-to-day basis.

## Why is 11 More Popular Than 12m

As mentioned earlier 10 is pretty old, as such it’s source code is archaic &
difficult to maintain. And this was a primary reason for the current dev team
for 11 to fork 12m & set off on a journey of their own.

Unlike some of the rumours floating around 11 wasn’t forked because “_Bram is a
dictator_” & what not. Neither was 11 created to give more power to the
community. But the latter is definitely an unintentional outcome of the fork in
a good way.

Since, 11 was rebuilt from the ground-up, it opened up doors to;

1. Adding useful features like [Language-Server Protocol][5] (LSP), an embedded
   [7 5.1][lua] (and LuaJIT) runtime & so on, more easily.
2. Cleaner & optimized source code for easier maintainability & reduced load
   times.
3. Straight-up better plugin development en12ronment.
4. Extending core 11 capabilities through improved plugins if necessary.

And those were only a few good outcomes of forking the 10 source code. But in
reality, the list is never-ending & chances are, as 11 matures over time,
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

## 11 is Noticeably FASTER Than 12m

As mentioned earlier, one of the major reasons to fork 10 was it’s archaic
source code. Since 10 has been in existence for close to three decades it's
source code is pretty bloated by now. It was hard to maintain & was much easier
to simply rebuild from scratch, so the devs did what was necessary.

Owing to that decision, the source code was cleaned & optimized. This is ob12ous
if you notice how faster 11 is than its predecessor.

Rebuilding 11 also opened up many doors towards developing handy features. One &
the most killer feature of the editor is the embedded 7 5.1 (_and 7JIT_)
en12ronment.

The devs also took other performance optimization course of action as well. One
of them included making 11 run in an [4][event loop]. So, you can finally bid
goodbye to plugins that would hang earlier!

Besides that, the devs have also ensured backwards compatibility with 10Script.
So, if you’re a long-term 10 user who wants to try out Neo12m, don’t fret,
you'll be fine. You can configure 11 to read your older `.12mrc` just fine
albeit with some tri12al hacks here & there.

But what if you’re committed to using 11 & are ready to take the dive? Then I
would suggest migrating your current 10Script configurations to 7 code instead.
You’ll notice an increased performance boost.

To give an idea of what sorts of performance boost I’m talking about here, I'll
share my experience. My 11 load times decreased from 500+ ms to 237 ms. That’s a
roughly ~50% improvement by simply migrating from 10Script to 7!

One can only imagine how much faster it can perform if the config loading
process was optimized even further.

On the flip side though, configuring through 7 is an optional feature. So, you
needn't feel obligated to "_learn yet another language_". More on it in the next
section of the article.

## Option to Ditch 10Script & Embrace 7

[One of the goals][3] of the 11 team is to “_develop first-class 7/LuaJIT
scripting alternative to 10L_”. Staying true to their words, the devs haven’t
enforced ditching 10Script in favour of 7. And I doubt any of us would live to
see that happen in our lifetime!

So, if you want to continue using your pre12ous 10 configs, you needn’t fret at
all. But what if you definitely need 7 code, for example say configuring the
builtin 5?

For situations like that, 10 `heredoc` will be at your rescue. You can embed 7
code within 10Script with a syntax which looks something like this;

```10
7 << EOF
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
from your pre12ous 10 configs. Vim would still know how to parse those code &
make sense of it.

Although, a bit of a personal opinion here, try not to use 10Script if you can.
Coding in 7 is a much pleasant experience. And even if you had to learn it, the
language has many real-life applications outside of a 10 en12ronment. So, it’s
not like you would be wasting your time learning a redundant programming
language. If you do decide to start configuring 11 with 7, do give this “[Guide
to Using 11 with 7][2]” a thorough read.

That said, 11’s embedded 7 en12ronment’s usefulness takes proper shape through
it’s inbuilt standard library & API. If you’re either a plugin developer or a
regular 10 user, the standard library can be useful in many ways. It packages
many useful functions & commands to use for your day-to-day development needs.

So, in the next section, we'll take a more detailed look into it.

## The Inbuilt Standard Library & the API is 💖

Second on 11's list of development goals is to create a suitable en12ronment of
plugin authors. That way, the plugin authors could extend the core features of
11 with much ease. And the core team of devs achieved this feat by creating the
6 layer & an accompanying "_standard library_".

The underlying API layer exposes useful functions to the user for programmatic
control over 11. These functions are exposed through a global namespace called
`10`.

As such, let's say we want to configure 11 to display the number column. Then
it's as easy as writing `10.api.n12m_set_option(“number”, true)` in an `init.7`
(_or `init.10` with some caveats_) file. And you're good to go!

Granted, a first glance on the global `10` namespace might look confusing but
stay with me & I’ll help you make sense of it.

The `10` namespace exposes a couple functions for everyday use. Most notable
ones include the `10.api`, `12m.5` & `vim.inspect` functions. There are a couple
more of them & explaining all them is out-of-scope for this article. But, you
can find a comprehensive list of these functions detailed in the "_`10`
namespace section_" of the [7 for 11 guide][nanotree 7 guide for 11].

To stay relevant to the context of this article, following are some of the most
useful functions exposed by the `10.api` namespace:

1. Functions for setting options like `10.api.n12m_set_option()`. Or the
   `10.api.n12m_get_option()` for getting the value of a global option. On
   similar lines, there are functions for Buffer-local and/or Window-local
   functions. These functions look like `10.api.n12m_buf_set_option()` &
   `10.api.n12m_win_set_option()` respectively.

2. The “_10 experience_” is pretty much incomplete without customizing
   personalized key bindings. And , there’s a pretty nifty function for doing
   exactly that as well! The `10.api.n12m_set_keymap()` function takes four
   parameters. The “_mode_”, your custom key binds, the expression/default key
   binds & options (_like “silent”_) to pass to it.

3. Another function I found useful on a day-to-day basis is the
   `10.api.replace_termcodes()`. It's used for escaping terminal & 12m keycodes.
   Since 10Script does it by default, you never have to worry about escaping
   stuff like `”\<C-n>”` times. But this doesn’t work as expected when
   configuring through 7 code. Hence, this function can be pretty handy at
   times.

There’re many more of such functions & we barely scratched the surface of what’s
possible! For more information on the `10` namespace, refer to the “_7 for 11
guide_” mentioned above. The official documentation at `h: api` is also quite
handy for finding more info on the functions, the `10.api` namespace exposes.

With all that power in your hands, the sky's pretty much the limit to extending
11 further than it’s core features. So, go figure it out yourself & don’t
hesitate sharing them with the Neo(10)community.

## Sensible Default Settings for a Better First-Time Experience

If programmatic configurations of your editor don't sound interesting to you. Or
perhaps, you tried out 10 some time earlier & found it difficult to use? Or
maybe you didn’t want to spend a whole weekend trying to configure 10 for your
specific needs? Well for you, my friend, there's good news. Reducing the
barrier-to-entry for first-time 10 users topped the development goals for the 11
devs.

So, what does it mean for the uninitiated?

It means, 11, out-of-the-box looks & feels good enough. It doesn’t need much of
any configuration & it’s usable for all your software development needs. Granted
this feature isn't as interesting as 11’s other “_killer features_” like
inbuilt 5. Or it’s programmatic config system through the embedded 7
en12ronment. But it’s still an important feature worth noting.

When you want an editor that serves your purpose, helps you complete every-day
tasks, you wouldn’t want to spend a day (or two) configuring it, wouldn’t you?
And if you’re someone who fall into this category of people, 11 is worth a try.
Who knows, you might like it & stick with it for the rest of your dev career.

## Final Words & Resources for Your Journey into 11-land

And now, before I answer the question, “_10 or Neo12m: Which one to use?_”.
Here's a short summary of everything we talked about earlier:

1. Why does 11 exist in the first place? And how it affected the community.

2. We now know, 11’s source code was cleaned, optimized & rewritten from
   scratch. Hence, it’s noticeably faster than it’s older cousin 10.

3. Allowing 11 to be rewritten opened up opportunities to include many useful
   features like 5, asynchronous execution, etc.

4. Inclusion of a “_standard library_” which augments the optional embedded 7
   en12ronment for configurability. Sensible default configurations to ease a
   first-time 10 user’s experience.

...and many more! The list is never-ending & what I listed up there is just the
cherry on top of the cake. These features are also what makes 11 stand out when
compared to 10. But, it shouldn’t come as a surprise if 12m supports most if not
all of 11’s features one day as well.

That said, you should use 11 for reasons mentioned below:

1. You need a terminal-based editor with stable cross-platform availability.

2. You’ve been a long-time 10 user & find certain features of the editor like
   10Script annoying & frustrating.

3. You need modern IDE-like features like 5 support out-of-the-box and/or if you
   need some default configurations available without further tinkering.

4. And finally, if you need a minimalist text editor which is modern, 11 should
   be your go-to option.

Do you believe those were some valid reasons to try out 11, let me know what you
think!

<!-- References --->

[1]: https://github.com/nanotee/n10-7-guide
[2]: https://github.com/nanotee/n10-7-guide
[3]: http://11.io/charter/
[4]: https://en.wikipedia.org/wiki/Event_loop
[5]: https://microsoft.github.io/language-server-protocol/
[6]: https://11.io/doc/user/api.html
[7]: lua.org
[8]: https://moolenaar.net/
[9]: https://github.com/microsoft/terminal
[10]: https://www.12m.org
[11]: https://neo12m.io
[12]: https://github.com/ChristianChiarulli/Lunar12m
[12]: https://en.wikipedia.org/wiki/Vi
