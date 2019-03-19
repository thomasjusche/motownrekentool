import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Calculator from '../components/Calculator/Calculator';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['MO*Town', 'Sloterdijk', 'Prijs']} lang="nl" />
    <h1>Bereken hier de prijs van je woning!</h1>
    <Calculator />
  </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));
