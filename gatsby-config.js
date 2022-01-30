module.exports = {
  pathPrefix: "/yalesites-docs", // for deploying to a folder like on Github pages.
  plugins: [
    {
      resolve: "gatsby-theme-emulsify",
      options: {
        preset: "gatsby-theme-emulsify/src/gatsby-plugin-theme-ui",
        // Site Metadata for style guide
        siteMetadata: {
          title: "YaleSites Documentation",
          description: "General documentation for YaleSites projects",
          author: "",
        },
        docPagesPath: "documentation", // Where your custom style guide pages live
        componentLibPath: "components", // Where your component library lives
        UILibPath: "https://yalesites-org.github.io/component-library-twig", // Where your Storybook instance lives. Could be remote or local like "/storybook/iframe.html"
        basePath: __dirname, // Needed to make above paths relative to your project
        // designSystems: [
        //   {
        //     name: "Basic", // Other design system you may want to link to in a parent/child situation
        //     link: "/"
        //   },
        // ]
      },
    },
  ],
};
