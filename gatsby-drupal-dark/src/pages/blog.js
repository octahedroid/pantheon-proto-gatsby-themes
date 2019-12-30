import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Layout from "../gatsby-theme-pantheon-drupal/components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";
import Card from 'gatsby-theme-pantheon-core/src/components/card';

const BlogPage = ({data}) => {
  
  const [filteredItems, setFilteredItems] = useState(data.posts.slice(0,6));

  return (
    <Layout>
      <SEO
        title="Octahedroid Blog Starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="bg-lightShade">
          {filteredItems &&
            filteredItems.map((post, i) =>(
            <div className="w-full lg:w-1/2">
              <Card 
                title={post.title}
                text={post.excerpt}
                image={post.image}
                link={post.link}
                ctaText="Read more..."
              />
            </div>
          ))}
      </div>
    </Layout>
  );
};

// export const query = graphql`
// `;

BlogPage.propTypes = {
  data: PropTypes.object,
};

BlogPage.defaultProps = {
  data: {
    posts: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
        excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
        excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
        excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
        excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
        excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
      {
        title: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        excerpt: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
        image: 'hero.png',
        link: '/',
      },
    ]
  }
}

export default BlogPage;