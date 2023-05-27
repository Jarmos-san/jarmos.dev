type FeaturedArticleTypes = {
  title: string;
  summary: string;
  href: string;
  publishedDate: Date;
};

export const featuredArticles: Array<FeaturedArticleTypes> = [
  {
    title: "How to Create Custom Keymaps in Neovim with Lua?",
    summary: `Neovim's Lua runtime allows for powerful customization through
      custom keybindings. Learn how to write Lua functions for key mappings and
      modularize your configurations. Check out the Neovim-Lua Guide and other
      resources for more information. Migrate your Vimscript configs to Lua for
      a better experience.`,
    href: "/blog/create-custom-keymaps-using-lua-for-neovim",
    publishedDate: new Date("2021-10-12"),
  },
  {
    title: "Vim or Neovim? Here is Why You Should Use the Latter!",
    summary: `Choose Neovim over Vim for faster performance, cleaner code,
      embedded Lua scripting, standard library, and sensible default settings.
      Discover the advantages of Neovim in everyday use cases. Read more.`,
    href: "/blog/vim-vs-neovim-a-comprehensive-analysis",
    publishedDate: new Date("2021-07-15"),
  },
  {
    title: `How to Create an Overpowered Blog With Hugo (as a WordPress
      Alternative)`,
    summary: `Learn how to set up a blog with Hugo, a user-friendly Static Site
      Generator. Hugo offers benefits like easy installation, content
      management, and SEO metadata. You'll also learn how to automate tasks with
      GitHub Actions and use a CMS backend like Forestry. Deploy your blog using
      Netlify for a global CDN.`,
    href: "/blog/blogging-with-hugo-as-an-wordpress-alternative",
    publishedDate: new Date("2021-02-21"),
  },
];
