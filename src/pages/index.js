import React from 'react';

import { Typography } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Calculator from '../components/Calculator/Calculator';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['MO*Town', 'Sloterdijk', 'Prijs']} lang="nl" />
    <Typography component="h2">Bereken hier de prijs van je woning!</Typography>
    <Calculator />
  </Layout>
);

export default IndexPage;
