/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/covid19-sbgn",
  siteMetadata: {
    title: "COVID19 File Listing",
    description: "COVID19 File Listing",
    url: "https://www.example.com", 
    image: "/images/FIXME.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@canninl",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    }
  ]
}