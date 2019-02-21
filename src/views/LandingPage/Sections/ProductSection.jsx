import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import ImageSearch from "@material-ui/icons/ImageSearch";
import Camera from "@material-ui/icons/Camera";
import Web from "@material-ui/icons/Web";
import Group from "@material-ui/icons/Group";
import Brush from "@material-ui/icons/Brush";
import FileCopy from "@material-ui/icons/FileCopy";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our Services</h2>
            {/* <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5> */}
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Consultancy"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Group}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Social Media Management"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Web}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Photography and Videography"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Camera}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Graphical Design"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Brush}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Content Curation"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={ImageSearch}
                iconColor="rose"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Resumes & Cover Letter Customization"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={FileCopy}
                iconColor="warning"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
