import { container, dangerColor } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "70px 0",
    ["@media (max-width:500px)"]: {
      padding: "10px 0"
    }
  },
  container: {
    ...container,
    ["@media (max-width:500px)"]: {
      marginLeft: "0px !important",
      marginRight: "0px !important",
      padding: "0px !important"
    }
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
    ["@media (max-width:500px)"]: {
      marginLeft: "0px",
      marginRight: "0px"
    }
  },
  image: {
    maxHeight: "450px !important",
    ["@media (max-width:500px)"]: {
      maxHeight: "120px !important"
    }
  },
  captionBg: {
    backgroundColor: "rgba(234, 63, 61, 0.45)",
    borderRadius: "5px",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "5px",
    paddingRight: "5px"
  }
};

export default carouselStyle;
