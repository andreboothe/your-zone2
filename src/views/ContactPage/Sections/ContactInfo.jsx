import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import { Phone, Mail } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class ContactInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
              Feel free to reach out to us at the following.
            </h4>
            
            <GridItem cs={12} sm={12} md={12}>
              <a  rel="noopener noreferrer" href="mailto:yourzone.jamaica@gmail.com" target="_blank" className={classes.contactLink}>
                <Mail className={classes.linkIcon}/>: yourzone.jamaica@gmail.com
              </a>
              <a  rel="noopener noreferrer" href="tel:876-896-1104" target="_blank" className={classes.contactLink}>
                <Phone className={classes.linkIcon}/>: 876-896-1104
              </a>
              <a  rel="noopener noreferrer" href="tel:876-476-1509" target="_blank" className={classes.contactLink}>
                <Phone className={classes.linkIcon}/>: 876-476-1509
              </a>
            </GridItem>
            
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
ContactInfo.defaultProp = {
  color: "scarlet"
};
export default withStyles(workStyle)(ContactInfo);
