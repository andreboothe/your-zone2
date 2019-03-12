import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      email: "",
      text: "",
      snackbarClose: true,
      snackbarMessage: "",
      snackBarColor: "",
      icon: ""
    };
  }

  onSubmit = () => {
    if (this.requiredFieldsFilled()) {
      const email = this.structureEmailJson();

      fetch("/mail", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(email)
      })
        .then(response => response.json())
        .then(response => {
          if (response.accepted.length > 1) {
            this.successSnackbar();
          } else {
            this.failSnackbar(
              "Failed to send message, please ensure email is valid or try again later"
            );
          }
        });
    } else {
      this.failSnackbar("Please fill in all fields");
    }
  };

  failSnackbar = msg => {
    this.setState(
      {
        snackbarMessage: msg,
        snackBarColor: "danger",
        icon: "",
        snackbarClose: false
      },
      () => this.delayCloseSnackbar(4000)
    );
  };

  successSnackbar = () => {
    this.setState(
      {
        snackbarMessage: "Mail sent",
        snackBarColor: "info",

        snackbarClose: false
      },
      () => this.delayCloseSnackbar(4000)
    );
  };

  delayCloseSnackbar = seconds => {
    setTimeout(() => this.setState({ snackbarClose: true }), seconds);
  };

  requiredFieldsFilled = () => {
    const { name, subject, email, text } = this.state;
    return (
      name.length > 0 &&
      subject.length > 0 &&
      email.length > 0 &&
      text.length > 0
    );
  };
  structureEmailJson = () => {
    const { name, subject, email, text } = this.state;

    return {
      subject: subject,
      email: email,
      text: `The name of the sender is ${name}.\n.You may contact them at ${email}\nTheir message:${text}`
    };
  };
  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  onChangeSubject = event => {
    this.setState({ subject: event.target.value });
  };
  onChangeText = event => {
    this.setState({ text: event.target.value });
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  renderSnackbar = () => {
    const { snackbarClose, snackbarMessage, snackBarColor } = this.state;
    return snackbarClose ? (
      ""
    ) : (
      <Snackbar
        message={snackbarMessage}
        color={snackBarColor}
        place={"bc"}
        open={true}
      />
    );
  };
  render() {
    const { classes } = this.props;
    const { name, subject, email, text } = this.state;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>We'd Love to hear from you</h2>
            <h4 className={classes.description}>
              Email us with all your queries. We will respond get back to you as
              soon a possible.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Your Name/Company"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: name,
                      onChange: this.onChangeName
                    }}
                  />
                  {/* </GridItem> */}
                  {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: email,
                      onChange: this.onChangeEmail
                    }}
                  />
                  {/* </GridItem> */}
                  {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Subject"
                    id="txt"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: subject,
                      onChange: this.onChangeSubject
                    }}
                  />
                  {/* </GridItem> */}
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    value: text,
                    onChange: this.onChangeText
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="scarlet" onClick={this.onSubmit}>
                      Send Message
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    {this.renderSnackbar()}
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
