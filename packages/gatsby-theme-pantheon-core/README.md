# [GatsbyJS Theme Octahedroid](https://gastby-theme-octahedroid.netlify.com/)

A marketing component library styled with [Tailwind CSS](https://tailwindcss.com/)  and [Theme UI](https://theme-ui.com/) 

## Get started

Install Gatsby CLI:
```sh
npm i --global gatsby-cli
```

Create new Gatsby project:
```sh
gatsby new my-new-website
```

Add this theme as a dependency for your site and the tailwindcss library:
```sh
cd my-new-website
npm install gatsby-theme-octahedroid tailwindcss
or
yarn add gatsby-theme-octahedroid tailwindcss
```

Then in your `gatsby-config.js` file use the theme as a plugin and in the options `themePath` add your theme file route like this:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-octahedroid`,
      options: {
        root: __dirname,
        themePath: `${__dirname}/theme`
      }
    }
  ]
};

```

## Theme requirements
In your site `src/` create a folder called `images/` and put the images you want to use in your site, this is for the theme to be able to create faster images.

### Theme provider
In order for **Theme UI** to use you new theme settings you need to use the `<ThemeProvider />` component and pass your theme file as the `theme` prop, we recommend the use of a Layout component for this, an example of a layout component is included in the `src/components/layout-example.js`.


## Theme configuration
If you want to change the components color, fonts, sizes, etc you must create a `theme.js` file at the root of your project, you can extend the original theme by shadowing the original theme file like this:

```js
const baseTheme = require('gatsby-theme-octahedroid/theme');

const myTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#0CBFC7',
    secondary: '#542c85',
    accent: '#E8DA8B',
    darkShade: '#37375B',
    lightShade: '#F7F7F7'
  },
  height:{
    ...baseTheme.height,
    hero: '700px'
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.heading,
      fontSize: "4rem",
    },
    h2: {
      ...baseTheme.heading,
      fontSize: "2.5rem",
    },
    h3: {
      ...baseTheme.heading,
      fontSize: "2rem",
    },
    h4: {
      ...baseTheme.heading,
      fontSize: "1.5rem",
    },
    h5: {
      ...baseTheme.heading,
      fontSize: "1.25rem",
      fontWeight: 'body',
    },
    h6: {
      ...baseTheme.heading,
      fontSize: "1rem",
    },
  }
}
// console.log(myTheme);
module.exports = myTheme;
```

<br />

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/octahedroid/gatsbyjs-theme-octahedroid)

<br />

## Resources
* [Gatsby documentation](https://www.gatsbyjs.org/docs/)
* [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
* [Theme-UI documentation](https://theme-ui.com)

<br />

## Credits
* Images - [undraw.co](https://undraw.co/)

<br />

## Support

For issues and features request, use **Github** or access the [support page](https://octahedroid.com/support) provided by **Octahedorid** 

<br />

### Upcoming featured

@TODO post install scripts for initial setup