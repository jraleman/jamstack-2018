module.exports = {
  siteMetadata: {
    title: 'Cafeteria Tracking System'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#01babc',
        theme_color: '#01babc',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
