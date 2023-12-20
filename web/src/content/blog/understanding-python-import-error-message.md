---
title: "Understanding Why Your FastAPI Throws an ImportError Message"
description:
  'Master Python module execution! Learn about modular programming, FastAPI
  project structuring, and resolving the "ImportError: attempted relative import
  with no known parent package." Understand Python''s `__name__` and execute
  modules correctly. Boost your Python skills! 🚀'
publishedDate: 2021-03-24
coverImage:
  url: https://ik.imagekit.io/jarmos/understanding-python-import-error-message.png?updatedAt=1702974989269
  alt: Understanding the "ImportError" Message in Python
---

If you worked on a Python project before you would know, the said programming
language is a very handy scripting & interpreted language. You could take a
simple Python file & invoke the following CLI command without any issues:

```console
$ python script.py
# ... output of the code in the Python script
```

Its scripting capabilities allows the programming language to be used on with
other scripting languages like [Bash](https://www.gnu.org/software/bash). But
what makes Python truly stand out from its competitors are its
"[_modular programming_](https://en.wikipedia.org/wiki/Modular_programming)"
capabilities. As such its not uncommon to build large modular projects where
each functional aspects of the project are separated in to their own individual
modules (or _namespace_) using Python.

And since Python is a scripting language its possible to execute Python Modules
as scripts as well when & wherever necessary. Although how the program's runtime
behaviour post-execution might differ which might or might not be as intended.

Besides, the language is also unopinionated on an "_entrypoint_" during
execution which makes things a tad bit complicated for the uninitiated. And
we'll discuss more about it in the rest of the article.

We will also shed light on how to fix the dreaded
`ImportError: attempted relative import with no known parent package'` error
message you might have stumbled upon. And just to let you know, the primary
focus of this article will be to understand the said error & figure out why
Python throws such tantrums some times.

That said, towards the end of the article you should've a better idea about;

1. [Python Modules](https://docs.python.org/3/tutorial/modules.html) & its
   `import` system.

2. Organising your Python project's source code properly so as to not face its
   `ImportError` tantrums.

3. The `python` Interpreter in the
   [Command-Line Interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface).

## Understanding Python Modules With a Hands-On Approach

Depending on how you look at it, Python modules will either be **VERY**
confusing to you or a complete game-changer! If you asked me, I personally
prefer how the other languages like JavaScript & Golang handles their modular
file imports. Here's where you can read more about
[ES6 JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
& [Go Modules](https://go.dev/blog/using-go-modules) if you're interested in
them.

But without side-tracking much let's head back to our brief lesson Python
Modules.

Below we've a very close-to-real-world replication of what an example
[FastAPI](https://fastapi.tiangolo.com) project is structured like. Each Python
files contain some functional aspect of the end-product hence making the most
out of a modular approach.

```bash
.     # root of the project's repository
├── config     # package containing constant config files like DB URLs
│   ├── loaders.py
│   ├── settings.py
│   └── ...     # more such modules
├── ...     # more such sub-packages each with its own set of modules
├── routes     # package containing modules with the routes of the API
│   ├── login.py     # example route for the "login" API endpoint
│   ├── admin.py     # another example route
│   └── ...     # more example routes as mentioned above
├── main.py     # the entrypoint file which will programatically execute the webserver
└── requirements.py     # the dependencies file for the project
```

While our imaginary project contains a lot of
[Python _Packages_](https://docs.python.org/3/tutorial/modules.html#packages),
what we need to look at is the `main.py` file. Since Python has no opinion about
what an "entrypoint" should be like, by convention its usually named `main.py`
file.

This `main.py` file is responsible for importing all the necessary modules from
around the project's repository & invoke [`uvicorn`](https://www.uvicorn.org) (a
fast ASGI webserver) to start the web server. And to give you a general idea of
the contents of our `main.py` here's a minimal example:

```python
from uvicorn
from fastapi import FastAPI

from .routes import login
# import the rest of the API routes

from .config import info
# import the rest of the static information

# Instantiate the FastAPI instance which "uvicorn" will understand
app = FastAPI()

# Ensure the FastAPI recognises the URL endpoints
app.include_router(login.router)

if __name__ == "__main__":
    # Run "uvicorn" programmatically for debugging reasons & for a more fine-tuned control
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

And now I bet any intermediate Python programmers would think they could try
executing the `python main.py` set of commands & call it a day. But sorry to
break it you, there's a little surprise waiting for you!

If you're learning to code, I suggest copying the code snippet above & try
executing it by following the instructions as laid down in this article till
now. Not only will get some practice writing code but you'll also get used to
seeing your code crash when you believe it shouldn't do so.

That said if you tried executing the code snippet with the command
`python main.py`, Python will cry & throw you an error message which looks
similar to the one below:

```console
Traceback (most recent call last):
  File "/.../src/main.py", line #, in <module>
    from .routes import login
ImportError: attempted relative import with no known parent package
```

You try to scratch you head because you're pretty sure there's nothing wrong
with the source code, yet you don't understand why does the code crash! Well,
Python isn't wrong & neither are you (well to an extent at least)!

If you want to learn more about structuring large FastAPI projects, take a look
at the documentations on -
["Building Larger Applications - Multiple Files"](https://fastapi.tiangolo.com/tutorial/bigger-applications)

Any way what went wrong here is the way the `python` Interpreter was invoked in
the CLI environment. We'll get to the core issue at hand eventually but before
that I believe it's necessary to understand some stuff beforehand.

For example, take a second look at the code snippet I shared above & you'll see
the `if __name__ == "__main__":` block. For many Python programmers just
starting out, this block of code is **VERY** confusing, yet they see it
everywhere used across almost all Python projects. Hence, the next section takes
a deeper dive in to explaining that concept.

But to give you a gist, when a Python script is executed, the `python`
Interpreter understands the context of execution i.e if the executed file is
either a standalone script or a module based on the value of `__name__`.

Regardless, before you proceed with the rest of the article I suggest giving the
official documentations on
[Python Modules](https://docs.python.org/3/tutorial/modules.html) a thorough
read. It'll give you a better idea about why the `if __name__ == "__main__":`
block is necessary when invoking Python Modules as a _script_.

## How Does the Value of `__name__` Change Based on the Execution Context

In the previous section we briefly mentioned the `if __name__ == "__main__":`
block & how it helps the `python` Interpreter understand the context of
execution. But in this section of the article we'll try to understand it in a
more in-depth manner.

So as we know Python is capable of executing any Python files disregarding the
concept of "entrypoint" like other languages have. In that case how would the
Interpreter properly differentiate "_a module to be imported into the namespace
without executing it's content_" & "_executing the contents of the file as is_"?

That's where the value of `__name__` comes handy!

So each Python Modules is injected with a `__name__` in their respective
namespaces during execution. If the said Module is executed directly on the CLI
environment, the value of `__name__` is assigned to the filename of that
specific module. For example, executing this command `python main.py` would
assign the value of `__name__` to `main.py`. And hence, the `python` Interpreter
identifies `main.py` as a standalone script. Such scripts do not have access to
other Python files by default. Although you can access other standalone Python
scripts inside another script's namespace as well & I'll leave that topic for
another article.

That said, on the other hand, if a Python Module is imported as another module
using the `import` statement, then the `__name__` value is assigned to the
string `"__main__"`. And in doing so, the imported module's namespace is
accessible to the executed module as well!

People just learning to code might find this concept **VERY** confusing & I'm
well aware of it. I was confused of it too once upon a time but bear with it for
a while & its totally worth understanding it. Having a strong grasp on Python
Modules is perhaps by far the most important concept to learn well. Hence,
towards the end of the article I have shared some resources you might want to
refer to for further studying.

That said, there's a way to execute Python Module as scripts from the CLI
environment. With respect to the same `main.py` file from our imaginary FastAPI
project above, you can then run this command - `python -m main`. Notice the `-m`
flag passed to the `python` Interpreter which signals to the interpreter to run
`main.py` file as a Module and not as a standalone script!

In other words, you no have to face the weird `ImportError` messages anymore
because `main.py` is treated as any other Module & the namespaces of the other
Modules are always accessible to it.

Regardless I'm quite impressed how well developed the functionality is! So hats
off to the [Python Core Developers](https://github.com/orgs/python/people) who
built the feature into the `python` Interpreter.

## Recommended Resources for Further Reading

I hope you now have a better understanding on how to execute either Python
_Scripts_ or _Modules_. If you still feel there are a couple of holes in your
understanding I've a few suggestions which might be worth checking out. Give
these recommended resources a thorough read & then come back to this article to
fill the gaps in understanding more about Python Modules.

- [Python Modules and Packages – An Introduction](https://realpython.com/python-modules-packages)
  by Real Python

- [Python Tutorial for Beginners 9: Import Modules and Exploring The Standard Library](https://youtu.be/CqvZ3vGoGs0)
  by Corey Schafer

- [Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html)
  of the official Python Tutorial.

- [Defining Main Functions in Python](https://realpython.com/python-main-function)
  by Real Python

- [Python Tutorial: if **name** == "**main**":](https://youtu.be/sugvnHA7ElY) by
  Corey Schafer
