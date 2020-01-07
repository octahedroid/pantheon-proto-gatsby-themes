import React from "react";

import Layout from "gatsby-theme-pantheon-drupal/src/components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";

import PageTitle from "gatsby-theme-pantheon-core/src/components/page-title";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact us" />

      <Layout.Container>
        <PageTitle>
          <PageTitle.Title>Contact us</PageTitle.Title>
        </PageTitle>

        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque. Vestibulum rhoncus est pellentesque elit ullamcorper. Malesuada pellentesque elit eget gravida cum sociis natoque. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Turpis egestas integer eget aliquet nibh praesent tristique. Cras tincidunt lobortis feugiat vivamus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Mi quis hendrerit dolor magna eget est lorem. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Vel turpis nunc eget lorem dolor sed viverra ipsum. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Duis ultricies lacus sed turpis tincidunt. Aliquet enim tortor at auctor urna nunc id. Aliquet risus feugiat in ante metus dictum at tempor commodo. Justo laoreet sit amet cursus sit amet dictum.</p>
        <p>Erat velit scelerisque in dictum non. Tristique senectus et netus et malesuada. Libero volutpat sed cras ornare. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Ultrices in iaculis nunc sed augue lacus viverra vitae. Duis ultricies lacus sed turpis. Convallis tellus id interdum velit laoreet. Proin fermentum leo vel orci porta non. Tristique risus nec feugiat in fermentum. Vestibulum rhoncus est pellentesque elit ullamcorper. Vulputate ut pharetra sit amet aliquam id diam. Fusce id velit ut tortor pretium viverra suspendisse. Consequat id porta nibh venenatis cras sed. Sed blandit libero volutpat sed cras ornare arcu dui vivamus.</p>
        <p>Consequat nisl vel pretium lectus quam id leo in. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Amet mattis vulputate enim nulla aliquet porttitor lacus. Aliquam etiam erat velit scelerisque in dictum non. Sed arcu non odio euismod lacinia at quis risus sed. Porta nibh venenatis cras sed felis eget. Sollicitudin ac orci phasellus egestas tellus rutrum. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Tristique et egestas quis ipsum. Sapien nec sagittis aliquam malesuada bibendum. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Arcu odio ut sem nulla pharetra diam sit amet nisl.</p>

      </Layout.Container>
    </Layout>
  );
}

export default ContactPage;
