/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// import './layout.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <CssBaseline />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '90%',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <main>{children}</main>
          <footer>
            <a href="https://www.nieuwbouwmotown.nl/">Bezoek de MO*Town website</a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
