import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import ImageSearch from "@material-ui/icons/ImageSearch";
// import Camera from "@material-ui/icons/Camera";
// import Web from "@material-ui/icons/Web";
// import Group from "@material-ui/icons/Group";
// import Brush from "@material-ui/icons/Brush";
// import FileCopy from "@material-ui/icons/FileCopy";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class CoreValues extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Who we are?</h2>
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
              {/* <h3 className={classes.title}>Belief</h3> */}
              <h5 className={classes.description}>
                We are a full service digital-marketing agency compromising of a
                team of digital marketers and designers that strongly believes
                that being a favorite company is far more important than being a
                famous one. <br />
                We craft and execute winning digital marketing strategies that
                compels your target audience to take favorable actions and
                develop effective content strategies for your brand.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(CoreValues);
