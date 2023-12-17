# The Website's Source Code

This directory contains the Astro source code for the website and the rest of
the toolings required to build and maintain the source code. The structure of
the code is as follows:

```console
.
├── public
├── src/
│   ├── components/
│   │   ├── ExampleComponent.astro
│   │   └── # ... more such Astro components
│   ├── content/
│   │   ├── blog/
│   │   │   ├── example-blogpost.md
│   │   │   └── # ... more such blogposts written in Markdown
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── HeadLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── # ... more such "pages" written in Astro
│   ├── styles/
│   │   ├── main.css
│   │   └── # ... more such CSS code required to style the website
│   └── end.d.ts
├── tests
├── .eslintignore
├── .eslintrc.json
├── .prettierignore
├── .prettierrc.json
├── README.md
├── astro.config.ts
├── package-lock.json
├── package.json
├── playwright.config.json
└── tsconfig.json
```

Following is a brief description of the contents of the directory:
