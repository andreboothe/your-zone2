/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
              >
                Your Zone
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/about"
                className={classes.block}
                // target="_blank"
              >
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://Yourzonemedia.com"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Your Zone
          {/* <Favorite className={classes.icon} /> by{" "} */}
          {/* <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
          >
            Your Zone
          </a> */}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
