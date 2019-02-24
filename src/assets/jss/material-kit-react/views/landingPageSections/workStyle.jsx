import { title } from "assets/jss/material-kit-react.jsx";
import {
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  dangerColor,
  dangerBoxShadow,
  roseColor,
  roseBoxShadow
} from "assets/jss/material-kit-react.jsx";
const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  contactLink: {
    "&,&:focus": {
      color: "#000 ",
      textDecoration: "none",
      display: "inline-flex",
      padding: "10px 10px",
      lineHeight:"45px",
      fontSize:"45px",
      verticalAlign: "middle",
      width:"100%"

    },
    "&:hover":{
      backgroundColor: dangerColor,
      color: "#FFFFFF",
      ...dangerBoxShadow,
      borderRadius: "10px !important"
    }
  },
  linkIcon:{
    "&,&:focus": {
      color: "inherit",
      textDecoration: "none",
      
      fontSize:"50px !important"
    },
    "&:hover":{
      backgroundColor: dangerColor,
      color: "#FFFFFF !important",
      ...dangerBoxShadow
      
    }
  }
};

export default workStyle;
