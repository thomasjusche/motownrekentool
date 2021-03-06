module.exports = {
  pathPrefix: '/motownrekentool',
  siteMetadata: {
    title: 'MO*Town Rekentool',
    description: 'Tool voor het berekenen van de meter- en totaal prijs voor een MO*Town woning',
    author: 'Thomas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MO*Town Rekentool',
        short_name: 'MO*Town',
        start_url: '/motownrekentool/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
