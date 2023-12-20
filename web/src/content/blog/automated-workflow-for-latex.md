---
title: "An Automated and Modern Workflow for Using LaTex"
description:
  Revitalize your LaTeX workflow with modern tools! Sidestep TeX Live's bloat
  and Overleaf's online constraints. Embrace `tectonic`—a Rust-based, efficient
  LaTeX engine. Harness `task` for streamlined automation. Craft modular
  documents with `subfiles` for seamless collaboration. Dive into a rejuvenated,
  efficient LaTeX experience! 🚀📄🔧
publishedDate: 2021-09-04
coverImage:
  url: https://ik.imagekit.io/jarmos/automated-workflow-for-latex.png?updatedAt=1702974989273
  alt: An automated & modern workflow for LaTex
---

If you're aware of or have used [LaTeX](https://www.latex-project.org) in the
past, you would know how archaic & antiquated its toolkit is. Sure, LaTeX
distributions like [TeX Live](https://www.tug.org/texlive) & online LaTeX
editors like [Overleaf](https://www.overleaf.com) alleaviates the need for any
manual setting up of an environment, but those options aren't for everyone. For
example, TeX Live can be **VERY** bloated while Overleaf is an online editor.
And Overleaf is an online web-based editor which means "_no Internet_ == _can't
work on your LaTeX projects_".

That said through this article, I hope to share how I work with LaTex by using
modern tools & software. You'll also get to see & understand what my typical
LaTeX workflow is like & take it as an inspiration to develop your own workflow!
But be prepared, this article will be a long one, so I hope you've bucket of
popcorn with you ready! 😉

## The Issues With Existing Tools Like Overleaf/TeX Live

If you read up a bit behind the history of
[LaTeX](https://en.wikipedia.org/wiki/LaTeX) (and it's predecessor,
[Tex](https://en.wikipedia.org/wiki/TeX)), you would know the software is old &
archaic (_calling LaTeX/TeX "archaic" is an understatement in my opinion_). You
see the LaTeX engine (_the software responsible for compiling the `.tex` files_)
is older than [GNU/Linux](https://en.wikipedia.org/wiki/Linux) (_not to be
confused to the Linux kernel_) itself by at least a decade! Suffice to say, the
UI/UX of using LaTeX/TeX isn't up to modern standards.

Fortunately though, software distributions like TeX Live & online editors such
as Overleaf eased most of the pain points of using LaTex/Tex. TeX Live packages
everything an user would require to use LaTex in a standalone distribution. And
it included everything like language packs, encoding, macros, a text-editor,
offline documentations of the included command-line tools & so on. You might or
mightn't ever need those extra features when compiling the `.tex` files to
`.pdf`.

Such overloaded distributions also came at a hefty price! For instance, on a
standard Ubuntu LTS release, installing the various available TeX Live
distributions would use up anywhere between 1-6+ GB of storage space
([see source](https://gist.github.com/shivams/0e62b79aaef345560c11aa1862b7029c))!
I don't know about you, but I for sure wouldn't want to waste upwards of 6 GB of
storage space simply for a bunch of redundant software I might or mightn't ever
use.

If redundant & unnecessary wastage of precious storage space bothers you as
well, you could give Overleaf a try. The online editor provides a nice interface
& similar to TeX Live, it already provides everything you'll ever need to
compile you PDF documents. The major (and perhaps the only) drawback of the
platform for me is it's hard dependency on Internet connectivity. For me this is
a major drawback because I travel often & I would like to work on my book(s)
even when I don't have access to the Web.

The other common issues I faced with all LaTex distributions are:

1. Lack of proper Language-Server Protocol (LSP) support.
2. Compilation is often insanely slow even for LaTeX documents which are barely
   a handful of pages long!
3. Set of ambiguously named command-line tools which could be integrated into
   one single binary by today's standards.

On a brigher note though, all of the aforementioned issues can be resolved by
using a couple of modern tools & the next section sheds light on those tools. A
heads up though, some of the said tools are redundant-proof. So if you're
software developer, you can easily integrate them into your development workflow
as well even when not working with LaTeX!

## Introducing the Modern LaTeX Tool Kit

The "modern" LaTeX workflow I adopted recently requires a couple of software
installed locally (_and yes, don't worry they're not as bloated as TeX Live_).
Here are the following list of tools I use:

- [`tectonic`](https://tectonic-typesetting.github.io), a modern &
  self-contained TeX/LaTeX engine & a CLI tool written in
  [Rust](https://www.rust-lang.org).
- [`task`](https://taskfile.dev) a modern & cross-platform alternative to
  [GNU Make](https://www.gnu.org/software/make/manual/make.html) written in
  [Go](https://go.dev).
- A Text Editor of your choice for example [Neovim](https://neovim.io) or
  [Sublime Text 3](https://www.sublimetext.com) or
  [Visual Studio Code](https://code.visualstudio.com) which is my personal
  preference.

**NOTE**: You might want to stick around & follow me for future updates! I'm
working on another write-up which aims at discussing setting up a work
environment for LaTeX projects using VSCode/Neovim.

At the crux of my workflow is `tectonic` which is responsible for compiling the
`.tex` files to `.pdf` (and much more)! The said CLI tool is actively developed
using the Rust language & as such you can expect it to be **VERY** fast! The
authors of `tectonic` also advcates how the project stands on the shoulders of
the giants. And they say, the project wouldn't have seen the light of the day
without the collective effort put into the
[XeTeX project](http://xetex.sourceforge.net)
([see source](https://tectonic-typesetting.github.io/book/latest/introduction/index.html#tectonic-and-tex)).

While I don't understand how `tectonic` works under-the-hood, you've my personal
guaranteed, its as useful as a full-blown bloated distribution like TeX Live!
You needn't worry about a package's existence on the local machine because
`tectonic` is smart enough to figure it out at compile time! It'll identify what
packages are used in the
"[_preamble_](https://en.wikibooks.org/wiki/LaTeX/Document_Structure#Preamble)"
& then either download them to be cached for later use. You can configure
`tectonic` to download packages eagerly but using the cache is preferable for
faster usages & workflow.

You should also note, the tool has two versions of the CLI; the existing
[`v1`](https://tectonic-typesetting.github.io/book/latest/ref/v1cli.html) & the
work-in-progress
[`v2`](https://tectonic-typesetting.github.io/book/latest/ref/v2cli.html)
interface. I prefer using the v2 interface because of its intuitiveness & a
[`cargo`](https://doc.rust-lang.org/cargo)-like user-experience. I suggest going
through the documentations I linked above to gain more knowledge about the
differences.

But for starters here's a quick sneak peak into the differences:

```console
# The "-X" (notice the capital "X") stands for the v2 interface.
tectonic -X build

# And this is the v1 interface which will be deprecated some day.
tectonic my-file.tex
```

The second tool in the box is `task` which is a cross-platform & modern
alternative to GNU Make. The tool is also a single binary & which was written
using Go, so you can expect it to be pretty fast & responsive! Besides, unlike
GNU Make's `Makefile`, `task` uses a `Taskfile.yml` (_notice its an YAML file_)
which is easier & faster to write, maintain & distribute. So if you're not
well-acquainted with the syntax of `Makefile`, the `Taskfile.yml` would be a
godsend for you. If you're not well-acquainted with YAML, check out
[this resource to learn it in a couple of minutes](https://learnxinyminutes.com/docs/yaml).

I've also share an example `Taskfile.yml` in the next section for your reference
but I also suggest checking out the
[official documentations on `task`](https://taskfile.dev) as well.

The third tool I use is Visual Studio Code (_and on occasions Neovim as well_).
This is perhaps the only tool-agnostic aspect of the entire workflow & you're
free to choose any Text Editor of your personal preferences! But just so you
know, I chose VSCode for it's plugin ecosystem (_hence allowing me to extend
it's base features_) plus its superb LSP support. You're free to choose **ANY**
Text Editor of your choice to write the `.tex` files. You only need them on a
local machine for compilation to `.pdf` file formats. Hence, in the next section
let's dive deeper into my personal workflow & see how you can take inspiration
from it as well.

## The Modern LaTeX Workflow

Throughout the rest of the article there's been only a brief mention of the need
of a more modern LaTeX workflow & the tools to make it happen. Hence, this
section of the article attempts to discuss the nitty-gritty details of the LaTeX
workflow! But before proceeding ahead, make sure you've the necessary tools
installed on your local machine.

The first step of the workflow is generating a boilerplate template to base our
LaTeX work off of. To help us in that regards, `tectonic` provides us a handy
command to get started;

```bash
# Note, the v1 interface doesn't provide an equivalent command!
tectonic -X new
```

It creates a couple of `.tex` files (to be compiled in to a `.pdf`) & a TOML
file. The later of which `tectonic` uses to identify the location of the files
to compile & much more! To know more about it, I recommend reading its
[official documentations](https://tectonic-typesetting.github.io/book/latest/v2cli/new.html).

But there's a little caveat you should be aware of when using the officially
recommended way of bootstrapping a LaTeX project! The filenames doesn't follow a
standard practice but `tectonic` won't be bothered if you don't do so. Hence,
deviating from the recommended file-naming system, here's what my project's base
structure looks like:

```console
.
├── src/
│   ├── subdirectories/
│   │   └── ...
│   ├── preamble.tex
│   └── main.tex
└── Tectonic.toml
```

I follow the tried-and-tested
"[_Modular Documents_](https://en.wikibooks.org/wiki/LaTeX/Modular_Documents)"
structuring for writing individual `.tex` files containing specific & atomic
contents of the final product. To stitch together all the `.tex` files
"_properly_" during compilation, the
[`subfiles`](http://www.ctan.org/pkg/subfiles) package comes to my rescue.

If this is your first time writing/using LaTeX, I **STRONGLY** recommend reading
the hyperlinked wikia page of "_Modular Documents_" before venturing further.

You see, of the many quirks of LaTeX's antiquated nature is; it doesn't
"_import_" other `.tex` like you would expect in any other programming language!
This has been a major pain & disappointment for me (_it still is but that's a
story for another day_). Without the `subfiles` package, the book(s) I'm
currently working on would've been painful to write in LaTeX.

On that note, the root of the project directory (_which is usually
version-controlled for me using [`git`](https://git-scm.com)_) contains the
`src` directory & the `Tectonic.toml` file. The `src` directory contains the
subdirectories of the different sections of say a book/thesis (_ignore it if you
deem it necessary_). And the `Tectonic.toml` file on the hand is responsible for
letting `tectonic` know where it can find the `preamble.tex`, the
[`main.tex`](https://en.wikibooks.org/wiki/LaTeX/Modular_Documents#The_main_document_document.tex)
file & the directory holding all those files.

As mentioned earlier, the `main.tex` file is responsible for importing the
_preamble_ & the rest of the sections (_if applicable_) located within the
"_subdirectories_" at compile time.

The `Tectonic.toml` file other hand is how you configure `tectonic` to do some
heavy-lifting for you. Although I observed its not a strict requirement, it's
best to leave it as it is because having it doesn't hurt anyone. Here's what the
contents of the file looks like when I'm working with `tectonic`:

```toml
[doc]
# The name of the project
name = "project-name"
# The tarball for 'tectonic' to use for packages.
bundle = "https://data1.fullyjustified.net/tlextras-2021.3r1.tar"

[[output]]
# The name of the generated PDF file.
name = "main"
# The file-format to output after compilation.
type = "pdf"
# The name of the 'preamble.tex' file, by default its '_preamble.tex'.
preamble = "preamble"
# The root file 'tectonic' will look for, by default it's 'index.tex'.
index = "main"
```

I've left comments in the TOML file to make it pretty self-explanatory. But I
would still recommend checking out it related
[official documentations](https://tectonic-typesetting.github.io/book/latest/ref/tectonic-toml.html)
for more information.

The gist is, you can use this configuration file to instruct `tectonic` about
how & where to find the source files to compile. As such you no longer have to
pass a specific `.tex` file to compile thus reducing errors & unsatisfactory
compilation results. In other words, the following set commands work:

```console
# Use this command to build the final PDF product.
tectonic -X build
# Use this command to dump partial sections of the whole document.
tectonic -X dump
# Use this command to compile a standalone PDF file like an article or resume.
tectonic -X compile
# Use this command to watch for changes & build the PDF as you write the LaTeX files.
tectonic -X watch
```

**NOTE**: None of the commands required the user to pass a `.tex` file.
`tectonic` is simply smart enough (_thanks to the_ `Tectonic.toml` _file_) to
figure out everything!

On that note, I don't know about you but having to not just remember but type
out multi-words commands on the Shell is tiresome for me! This is where `task`
comes handy for me, it not only simplifies multiple set of commands for me but
also helps in documenting them!

For reference, here's what a minimal `Taskfile.yml` looks like for some of my
small-scale LaTeX projects:

```yaml
version: 3

tasks:
  compile:
    desc: Compile the LaTeX files in to a PDF.
    cmds:
      - tectonic -X build --keep-intermediates --keep-logs

  cleanup:
    desc:
      Remove unnecessary & redundant stuff like the log files & improperly
      generated PDF files.
    cmds:
      - rm --recursive --force build
```

The minimal `Taskfile.yml` we shared up there is capable of performing the
following tasks:

1. Compile the `build/main/main.pdf` file by simply running `task compile`. You
   no longer have to remember complicated sets of CLI commands.

2. Cleanup the unnecessary files like log files, improperly generated PDF files
   & much more by invoking the `task cleanup` command.

3.And also document each of the individual `tasks` for future reference. So, in
case you ever forget a workflow, simply run `task --list` (or in short
`task -l`) to get a "_list of_ `tasks` _& a description of their
functionality_".

Of course, you can configure `task` to simplify & automate a lot more than what
we discussed so far! So, I suggest checking out the
[usage guidelines](https://taskfile.dev/usage) for `task` to customise your
workflow further.

## Suggestions for Improvements

As I mentioned earlier, LaTeX is an archaic & antiquated piece of software &
you're bound to stumble across a couple of hiccups here & there. Even if you
follow the workflow I shared in today's write-up, there's no guranteed it'll
work as expected. Fortunately, the tools I mentioned above does ease our
workflow by an exponential degree. The said workflow is by no means set in stone
& is a mere source of inspiration, so feel free to use it to develop your own
personal LaTeX workflow!

Some aspects of the workflow which can be improved further are things like
documentations of the `task`. As you develop your workflow over time, your
`Taskfile.yml` will grow larger & you won't be able to remember each of those
individual `task`! So yes, documentations are never enough, the more of it (_and
wherever necessary_), the better. `task` supports
"[_a long-format "summary" of an individual_ `task`](https://taskfile.dev/usage/#display-summary-of-task)",
utilise it well.

The example `Taskfile.yml` I shared here is minimal, don't stick to it try &
develop your own workflow! Create a couple more `task` where each one performs a
specific job, like
"[_build & watch for changes in the LaTeX files_](https://tectonic-typesetting.github.io/book/latest/v2cli/watch.html)"
or
"[_build & open the generated PDF file for preview_](https://tectonic-typesetting.github.io/book/latest/v2cli/build.html#command-line-options)"
& much more. Pretty much the sky is your limit to what you want to automate with
the tools mentioned in this workflow.

If you still need a more hands-on approach to help you develop your own LaTeX
workflow, you can check out one of the book project I'm working on. Its been
open-sourced for a while now & you can even read it for free (_right now &
forever_). So go & check out the repository of the
"[_Writing a Technical Book in LaTeX_](https://github.com/Jarmos-san/technical-book)"
(**_the book name isn't decided yet!_**).

Or if you need some refresher on LaTex, here're some helpful resources:

- "[_What're Some Good Learning Resources for a LaTex Beginner_](https://tex.stackexchange.com/q/11)"
  | [Tex - Stack Exchange](https://tex.stackexchange.com)
- ["_Learn LaTex in 30 Minutes_"](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)
  | Overleaf - The Online LaTex Editor
- ["_Learn LaTex_"](https://www.learnlatex.org) | Learn LaTex.org
- ["_Learn LaTex - A Beginner's Step-by-Step Guide_"](https://typeset.io/resources/learn-latex-beginners-step-by-step-guide)
  | Deeptanshu D - SciSpace

On a final note I would like to let you know, if you still found working with
LaTeX difficult, feel free to reach out to me! You can find me on
[Twitter](https://twitter.com/Jarmosan)/[LinkedIn](https://www.linkedin.com/in/jarmos)/[Email](mailto:somraj.mle@gmail.com)
& my inbox is always open! So, be sure to put aside your hesitations reach out
to me with your queries.
