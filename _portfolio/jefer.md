# Jefer: Dotfiles Management for the Minimalist

**NOTE**: Development on this project is still a work-in-progress.

Jefer is a tiny, simple & cross-platform tool to manage your configuration files
(more commonly known as [_dotfiles_][1]). Its written in [Rust][2], isn't
bloated & should work across a variety of platforms like MacOS, Linux or
Windows!

## Why Does the Project Exist?

Jefer was built to address some core issues I was facing to manage my dotfiles
across different workstations. Existing alternatives like [YADM][3],
[Chezmoi][4], and/or [Stow][5] were either too bloated, didn't have
cross-platform support or were too minimal for proper dotfiles management.

Jefer on the other attempts to resolve the shortcomings by providing the
following core features:

1. Be compliant across multiple platforms like MacOS, Linux & Windows as much as
   possible.
2. Be simple to use & minimal UI/UX with easy-to-remember CLI flags/options.
3. Make the most out of [symlinks][6]! Attempting to maintain multiple "_sources
   of truth_" is prone to errors & mess ups.
4. Stay out of the user's way with respect to configuring the dotfiles itself.
   For example, Jefer should not be the one decide how to edit the dotfiles.

<!-- Reference Links -->

[1]: https://dotfiles.github.io
[2]: https://www.rust-lang.org
[3]: https://yadm.io
[4]: https://chezmoi.io
[5]: https://www.gnu.org/software/stow
[6]: https://en.wikipedia.org/wiki/Symbolic_link
