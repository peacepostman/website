module.exports = {
  siteMetadata: {
    title: `Welcome to my portfolio`,
    description:
      "Bonjour, je m'appelle Benjamin Grauwin et je suis developpeur frontend depuis plus de 10 ans. J'aime travailler avec react",
  },
  polyfill: false,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,500`],
        display: "swap",
      },
    },
  ],
};
