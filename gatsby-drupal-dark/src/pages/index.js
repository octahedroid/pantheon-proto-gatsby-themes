import React from "react";

import Layout from "../gatsby-theme-pantheon-drupal/components/layout";
import Card from 'gatsby-theme-pantheon-core/src/components/card';

const demoPosts = [
  {
    image: 'hero.png',
    title: 'Post 1',
    meta: 'Jan 1, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    to: '/',
  },
  {
    image: 'hero.png',
    title: 'Post 2',
    meta: 'Jan 1, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    to: '/',
  },
  {
    image: 'hero.png',
    title: 'Post 3',
    meta: 'Jan 1, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    to: '/',
  },
  {
    image: 'hero.png',
    title: 'Post 4',
    meta: 'Jan 1, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    to: '/',
  },
  {
    image: 'hero.png',
    title: 'Post 5',
    meta: 'Jan 1, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    to: '/',
  },
]



function IndexPage() {
  return (
    <Layout title="Octahedroid starter">
      <Layout.Container flex >
      {demoPosts && demoPosts.map(post=>(
        <Card className="w-full lg:w-1/3">
          <Card.Intro>{post.meta}</Card.Intro>
          <Card.Image name={post.image}/>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          <Card.Link to={post.to}>Read more...</Card.Link>
        </Card>
      ))}
      </Layout.Container>
    </Layout>
  );
}

export default IndexPage;
