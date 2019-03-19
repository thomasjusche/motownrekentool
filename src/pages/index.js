import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calculator from '../components/Calculator/Calculator';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['MO*Town', 'Sloterdijk', 'Prijs']} lang="nl" />
    <h1>Bereken hier de prijs van je woning!</h1>
    <Calculator />
  </Layout>
);

export default IndexPage;
