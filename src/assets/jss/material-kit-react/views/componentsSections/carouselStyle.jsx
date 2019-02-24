import { container, dangerColor } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  image:{
    maxHeight:"365px !important"
  },
  captionBg:{
    backgroundColor: "rgba(234, 63, 61, 0.45)",
    borderRadius: "5px",
    width:"fit-content",
    marginLeft:"auto",
    marginRight:"auto",
    paddingLeft: "5px",
    paddingRight:"5px"
  }
};

export default carouselStyle;
