import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { LocationOn } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import ImageSearch from "@material-ui/icons/ImageSearch";
import Camera from "@material-ui/icons/Camera";
import Web from "@material-ui/icons/Web";
import Group from "@material-ui/icons/Group";
import Brush from "@material-ui/icons/Brush";
import Devices from "@material-ui/icons/Devices";
import ShopTwo from "@material-ui/icons/ShopTwo";

import consulting from "assets/img/services/consulting.jpg";
import design from "assets/img/services/design.jpg";
import programming from "assets/img/services/programming.jpg";
import photoGraphy from "assets/img/services/photoGraphy.jpg";
import socialMedia from "assets/img/services/socialMedia.jpg";

import consultation from "assets/img/services/consultation.JPG";
import content from "assets/img/services/Content.JPG";
import digital from "assets/img/services/DIGITAL.JPG";
import photo from "assets/img/services/Photo.JPG";
import social from "assets/img/services/Social.JPG";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const carouselImg = classNames("slick-image", classes.image);
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={photo}
                      alt="First slide"
                      // className=""
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <Camera className="slick-icons" />
                        Photography & Videography
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={consultation}
                      alt="Second slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <Group className="slick-icons" />
                        Consulting
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={programming}
                      alt="Fourth slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <Devices className="slick-icons" />
                        Web Development
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={social}
                      alt="Third slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <Web className="slick-icons" />
                        Social Media Management
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={design}
                      alt="Fifth slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <Brush className="slick-icons" />
                        Graphical Design
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={digital}
                      alt="Sixth slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <ShopTwo className="slick-icons" />
                        Digital Marketing
                      </h4> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src={content}
                      alt="Seventh slide"
                      className={carouselImg}
                    />
                    <div className="slick-caption">
                      {/* <h4 className={classes.captionBg}>
                        <ShopTwo className="slick-icons" />
                        Content
                      </h4> */}
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
