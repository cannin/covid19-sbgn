/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/covid19-sbgn",
  siteMetadata: {
    title: "covid19-sbgn",
    description: "COVID19 File Listing",
    url: "https://cannin.github.io/covid19-sbgn/", 
    image: "/images/TODO.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@canninl",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-57486113-12",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
}