/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Phone, Mail, Contacts } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Photography and Videography
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Consultancy
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Social Media Management
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Graphical Design
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Content Curation
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Resumes & Cover Letter Customization
            </Link> }}*/}
            <a
              href="/consultancy"
              // target="_blank"
              className={classes.navLink}
            >
              Consultancy
            </a>
          
        
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>
          About Us
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Button
          href="/contact"
          color="transparent"
          
          className={classes.navLink}
        >
          Contact us
        </Button> */}
        {/* <CustomDropdown
          noLiPadding
          buttonText="Contact Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Contacts}
          dropdownList={[
            <a href="mailto:yourzone.jamaica@gmail.com" target="_blank" className={classes.dropdownLink}>
              <Mail />: yourzone.jamaica@gmail.com
            </a>,
            <a href="tel:876-896-1104" target="_blank" className={classes.dropdownLink}>
              <Phone/>: 876-896-1104
            </a>,
            <a href="tel:876-476-1509" target="_blank" className={classes.dropdownLink}>
              <Phone/>: 876-476-1509
            </a>,
            
            
          ]}
        /> */}
        <Link to="/contact" className={classes.navLink}>
          Contacts
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Yourzonemedia/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/yourzone_media/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
