import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx";
import AboutInfo from "./Sections/AboutInfo.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    
    return (
      <div>
        
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            <AboutInfo />
          </div>
        </div>
        
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(AboutPage);
