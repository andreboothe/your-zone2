import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
import ImageSearch from "@material-ui/icons/ImageSearch";
import Camera from "@material-ui/icons/Camera";
import Web from "@material-ui/icons/Web";
import Group from "@material-ui/icons/Group";
import Brush from "@material-ui/icons/Brush";
import ShopTwo from "@material-ui/icons/ShopTwo";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import SectionCarousel from "./SectionCarousel";

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
            <GridItem xs={12} sm={12} md={12}>
              <SectionCarousel />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Consultancy"
                description="YourZone
                Media & Commnication helps businesses increase and retain customers. We can work with you and provide an action plan incorporating the various strategies for your success. Have a new business and don’t know how to start? We can help you too."
                icon={Group}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Social Media Management"
                description="We
                focus on creating valuable, creative and engaging content for your social media platforms with unique tactics to grow your audience.
               
               "
                icon={Web}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Photography and Videography"
                description="Have
                an exciting idea you want to bring to life? Our creative team will execute your production and bring your concept to reality. We will provide professional videos and photographs for your company that will attract your target audience."
                icon={Camera}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Graphical Design"
                description="Our
                experienced team will design your logos, flyers or any designs needed for your amazingly engaging visuals to grab your audience."
                icon={Brush}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Content Curation"
                description="Whether
                it be video production, writing, design or photography we  got you covered on content. We provide valuable, consistent and relevant information to attract and retain your audience which subsequently drives your sales."
                icon={ImageSearch}
                iconColor="rose"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Digital Marketing"
                description=""
                icon={ShopTwo}
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
