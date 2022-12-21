# 👨‍💻 Jarmos.dev

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Jarmos-san/personal-website/prod-deploy.yml?branch=main&label=CI%2FCD&logo=github&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/Jarmos-san/personal-website?label=Repo%20Size&logo=github&style=flat-square)
![GitHub Sponsors](https://img.shields.io/github/sponsors/Jarmos-san?color=%23EA4AAA&label=Support%20the%20Project&logo=github%20sponsors&style=flat-square)
![GitHub](https://img.shields.io/github/license/Jarmos-san/personal-website?label=License&logo=github&style=flat-square)
![Website](https://img.shields.io/website?down_color=Red&down_message=Offline&label=Website&logo=Vercel&style=flat-square&up_message=Online&url=https%3A%2F%2Fjarmos.vercel.app)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Jarmos-san/personal-website?label=Commit%20Frequency&logo=github&style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/Jarmosan?style=social)

This repository hosts the source code for my personal website - [jarmos.dev][1].
The website is built using the following tech stack:

- [Next.js][2]
- [Sass][3]
- [TypeScript][4]
- [Vercel][5]

## 🗒️ About the Project

I've been writing & sharing technical content ever since my country was under a
strict lockdown due to the COVID-19 pandemic. It was a good productive use of my
free time & I learned + experienced many nuances of software development in
general as well.

One such lesson was the importance of fast load times for better SEO
capabilities of a website. While sites created using Hugo did perform well, they
lacked modern web dev capabilities like [prefetching][6]. There were a handful
more reasons to switch to a React-based alternative but that's a story for
another day.

Any way, the project uses Next.js which is a React.js-based framework. It
provides me with all the modern benefits React.js has to offer in addition to a
couple more stuff. I suggest reading up on the official docs for more
information about the framework.

To keep the development complexity plain & simple, the project also uses Sass &
TypeScript. Using these two tools ensure typed-based bugs & maintainability of
the project isn't much of a concern.

That said, the project is developed in the open-source which means you're free
to use it for your needs as well! But before you fork the repository, please
ensure you read the usage guidelines properly. Also do not forget to give due to
credit to anyone who needs it.

## 📖 Using This Project

The project uses Next.js & hence you'll need to ensure you've the right
development environment setup on your local machine before you can write your
first line of code. So, its recommended you go through the "[_Setup
Next.js_][7]" section of the official documentations.

Once done, fork this repository & then run the following commands:

1. Clone the repository.

   ```console
   git clone git@github.com:<YOUR-USERNAME>/personal-website.git && cd personal-website
   ```

2. Install all the necessary dependencies.

   ```console
   npm install
   ```

3. Run the local dev server & review the local preview at [localhost:3000][8]

   ```console
   npm run dev
   ```

Now develop the website as per your needs & deploy it to Vercel (_or other
hosting platforms_) for your own personalised space on the Internet.

## 🫂 Acknowledgements

The project is developed in open-source & hence it wouldn't be complete without
the combined community efforts from everyone! Hence, here's a list of
individuals whose work directly or indirectly affected this project.

- [Ryan Warner][9] for sharing the design of the website in the public domain.
- [Tania Rascia][10] for the loads of inspiration she provides me to develop a
  website from absolute scratch.

## 📃 Usage Terms & Conditions

This project is developed under the terms & conditions (T&Cs) of the open-source
MIT license. You can read more about the T&Cs in the [LICENSE][11] document.
Hence, you're free to use, modify, copy & distribute the source code of this
project as you deem fit as long as you adhere to the T&Cs of the license.

<!-- Reference Links -->

[1]: https://jarmos.vercel.app
[2]: https://nextjs.org
[3]: https://sass-lang.org
[4]: https://www.typescriptlang.org
[5]: https://vercel.com
[6]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
[7]: https://nextjs.org/docs/getting-started
[8]: http://localhost:3000
[9]: https://www.warner.codes
[10]: https://www.taniarascia.com
[11]: ./LICENSE
