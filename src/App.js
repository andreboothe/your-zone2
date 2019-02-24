import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter, Redirect  } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import "assets/scss/material-kit-react.scss?v=1.4.0";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

var hist = createBrowserHistory();
const dashboardRoutes = [];

class App extends React.Component {
  

  componentDidUpdate(prevProps){
    
    if(this.props.history.location.pathname ){
      window.scrollTo({
        top: this.props.history.location.pathname ==="/"?0:600,
        left: 0,
        behavior: 'smooth'
      });
      
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (

    
    
      // <BrowserRouter >
      <React.Fragment>
        
      <div>
      <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Your Zone"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 100,
            color: "scarlet"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/logo-dark.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Supreme service at a competitive price.</h1>
                <h4>
                At YourZone Media & Communication, we are a team of creatives who envisions meaningful interactions between your brand and your customers. We strive to create lasting impressions and deliver on our promise to always offer competitive pricing and creativity.
                </h4>
                <br />
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        </div>
          <Switch>
          
            {/* <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />*/}
            <Route exact  path="/contact" component={ContactPage} /> *
            <Route exact  path="/" component={LandingPage} />
            <Route  path="*" render={() => (<Redirect to="/" />)} /> 
          </Switch>
          <div>
            <Footer />
          </div>
          </React.Fragment>
        // </BrowserRouter>
        
  
    )
  }
}

export default  withStyles(landingPageStyle)(withRouter(App));
