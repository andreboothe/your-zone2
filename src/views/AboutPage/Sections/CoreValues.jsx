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
            <h2 className={classes.title}>Who we are</h2>
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
              <h3 className={classes.title}>Belief</h3>
              <h5 className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, deserunt?
              </h5>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h3 className={classes.title}>Belief</h3>
              <h5 className={classes.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                eveniet!.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(CoreValues);
