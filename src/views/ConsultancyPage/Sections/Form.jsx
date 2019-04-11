import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";
import LocationOn from "@material-ui/icons/LocationOn";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import Select from "react-select";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
// import CustomTextField from "components/CustomInput/CustomTextField.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

let options = [
  { value: 8, label: "8:00am" },
  { value: 10, label: "10:00am" },
  { value: 12, label: "12:00am" },
  { value: 14, label: "2:00pm" },
  { value: 16, label: "4:00pm" },
  { value: 18, label: "6:00pm" }
];

class ConsultancyPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.defaultState = {
      timeSlot: [],
      date: "",
      email: "",
      name: "",
      contact: "",
      location: "",
      selectedTimeSlot: null,
      snackbarClose: true,
      snackbarMessage: "",
      snackBarColor: "",
      icon: ""
    };
    this.state = { cardAnimaton: "cardHidden", ...this.defaultState };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.formAnimation();
  }
  formAnimation = () => {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      300
    );
  };

  onChangeDate = event => {
    const date = event.target.value;
    this.setState({ date: date }, () => this.fetchTheDaysEvents(date));
  };

  onChangeContact = event => {
    this.setState({ contact: event.target.value });
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangeLocation = event => {
    this.setState({ location: event.target.value });
  };

  fetchTheDaysEvents = date => {
    const { max, min } = this.dateToMaxAndMinTime(date);
    // console.log(max, min, dateArr);
    this.setState({ loadingEvents: true });
    fetch("/consultation/getEvents", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        timeMin: min.toISOString(),
        timeMax: max.toISOString()
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.length === 0) {
          this.setState({ timeSlot: [...options] });
        } else {
          const filteredOptions = this.filterEventOptions();
          this.setState({ timeSlot: [...filteredOptions] });
        }
      })
      .then(() => this.setState({ loadingEvents: false }));
  };

  filterEventOptions = events => {
    const bookedTimes = events.map(event =>
      new Date(event.start.dateTime).getHours()
    );
    const filteredOptions = options.filter(
      option => !bookedTimes.includes(option.value)
    );
    return filteredOptions;
  };
  dateToMaxAndMinTime = date => {
    const dateArr = date.split("-");

    let maxTime = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    let minTime = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    maxTime.setHours(23, 59, 0, 0);
    minTime.setHours(0, 0, 0, 0);
    // console.log(maxTime, minTime);
    return {
      max: maxTime,
      min: minTime
    };
  };

  dateToMaxAndMinTimeSlot = (date, hour) => {
    const dateArr = date.split("-");

    let maxTime = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    let minTime = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    maxTime.setHours(hour + 1, 0, 0, 0);
    minTime.setHours(hour, 0, 0, 0);
    // console.log(hour);
    // console.log(maxTime, minTime);
    return {
      max: maxTime,
      min: minTime
    };
  };

  onChangeTimeSlot = timeSlot => {
    this.setState({ selectedTimeSlot: timeSlot });
  };

  minBookingDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);

    return date.toISOString().split("T")[0];
  };

  requiredFieldsFilled = () => {
    const {
      name,
      selectedTimeSlot,
      email,
      contact,
      date,
      location
    } = this.state;
    return (
      name.length > 0 &&
      selectedTimeSlot &&
      email.length > 0 &&
      date.length > 0 &&
      location.length > 0 &&
      contact.length > 0
    );
  };

  onSubmit = () => {
    const {
      name,
      selectedTimeSlot,
      email,
      contact,
      date,
      location
    } = this.state;
    if (this.requiredFieldsFilled()) {
      const { max, min } = this.dateToMaxAndMinTimeSlot(
        date,
        selectedTimeSlot.value
      );

      fetch("/consultation/booking", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          summary: "Consultation",
          location: location,
          description: `${name} would like to book a consultation. You may contact them @ ${contact} & ${email}`,
          start: min.toISOString(),
          end: max.toISOString()
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "confirmed") {
            this.setState({ ...this.defaultState });
            this.successSnackbar("Consultation has been booked");
          }
        });
    } else {
      this.failSnackbar("Please fill in all fields");
    }
  };

  successSnackbar = msg => {
    this.setState(
      {
        snackbarMessage: msg,
        snackBarColor: "info",
        snackbarClose: false
      },
      () => this.delayCloseSnackbar(4000)
    );
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

  delayCloseSnackbar = seconds => {
    setTimeout(() => this.setState({ snackbarClose: true }), seconds);
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
    const { classes, ...rest } = this.props;
    const {
      name,
      date,
      email,
      timeSlot,
      loadingEvents,
      selectedTimeSlot,
      contact,
      location
    } = this.state;
    return (
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Consultation Form</h4>
                  </CardHeader>
                  <p className={classes.divider}>
                    Please apply for a time slot here.
                  </p>
                  <CardBody>
                    <CustomInput
                      labelText="Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: name,
                        onChange: this.onChangeName
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: email,
                        onChange: this.onChangeEmail
                      }}
                    />
                    <CustomInput
                      labelText="Contact number"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "tel",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: contact,
                        onChange: this.onChangeContact
                      }}
                    />
                    <CustomInput
                      labelText="Location"
                      id="location"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOn className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: location,
                        onChange: this.onChangeLocation
                      }}
                    />
                    {/* <CustomInput
                      // labelText="Email..."
                      id="date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <CalendarToday
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        ),

                        value: date,
                        onChange: this.onChangeDate,
                        min: this.minBookingDate()
                      }}
                    /> */}
                    <TextField
                      // labelText="Email..."
                      id="date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <CalendarToday
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        ),

                        value: date,
                        onChange: this.onChangeDate,
                        min: this.minBookingDate()
                      }}
                      fullWidth={true}
                      InputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <CalendarToday
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        ),

                        value: date,
                        onChange: this.onChangeDate,
                        min: this.minBookingDate()
                      }}
                    />

                    {date === "" ? (
                      ""
                    ) : (
                      <Select
                        defaultValue={
                          timeSlot && timeSlot[0] ? timeSlot[0] : ""
                        }
                        slots
                        options={timeSlot}
                        value={selectedTimeSlot}
                        isLoading={loadingEvents}
                        onChange={this.onChangeTimeSlot}
                      />
                    )}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={this.onSubmit} color="danger">
                      Apply
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            {this.renderSnackbar()}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(ConsultancyPage);
