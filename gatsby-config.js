module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Alex Desrosiers",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    `gatsby-transformer-remark`,
    "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
    ],
};
