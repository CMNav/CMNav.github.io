import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import "../styles/PlanYourVisit.css";
import ItemStep from "../components/PlanYourVisit/SpotsStep";
import ReviewStep from "../components/PlanYourVisit/ReviewStep";
import PersonalStep from "../components/PlanYourVisit/personalStep";
import { spots, restaurants, events } from "../assets/PlanLists";

const steps = [
  "Choose Spots to go to",
  "Choose Events to attend",
  "Choose Restaurants",
  "Choose Transportation",
  "Review Details",
  "Personal Information",
];

const PlanYourVisit = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const spotsContainerRef = useRef(null);

  useEffect(() => {
    if (spotsContainerRef.current) {
      spotsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [activeStep]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ItemStep items={spots} />; // Render the ItemStep component with spots
      case 1:
        return <ItemStep items={events} />; // Render the ItemStep component with events
      case 2:
        return <ItemStep items={restaurants} />; // Render the ItemStep component with restaurants
      case 3:
        return (
          <Box sx={{ width: "100%", marginTop: 2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "28%",
              }}
            >
              <FormControl component="fieldset">
                <div style={{ textAlign: "center" }}>
                  {/* <FormLabel component="legend" style={{ fontSize: "24px" }}>
                    Transportation Type
                  </FormLabel> */}
                  <Typography variant="h5" gutterBottom>
                    Transportation Type
                  </Typography>
                </div>
                <RadioGroup
                  aria-label="transportation-type"
                  row
                  // value={transportationType} // Uncomment this line and replace "transportationType" with your state variable
                  // onChange={handleTransportationTypeChange} // Uncomment this line and replace "handleTransportationTypeChange" with your handler function
                >
                  <FormControlLabel
                    value="Walking"
                    control={<Radio />}
                    label="Walking"
                  />
                  <FormControlLabel
                    value="Bicycling"
                    control={<Radio />}
                    label="Bicycling"
                  />
                  <FormControlLabel
                    value="Driving"
                    control={<Radio />}
                    label="Driving"
                  />
                  <FormControlLabel
                    value="Public Transit"
                    control={<Radio />}
                    label="Public Transit"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ marginTop: 2 }}
            >
              Average Trip Time:{" "}
              {/* Replace this with your calculated average trip time */}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ marginTop: 2 }}
            >
              Average Distance Between Places:{" "}
              {/* Replace this with your calculated average distance */}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ marginTop: 2 }}
            >
              Estimated Transportation Cost:{" "}
              {/* Replace this with your calculated cost */}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ marginTop: 2 }}
            >
              Estimated Total Trip Time:{" "}
              {/* Replace "totalTripTime" with your calculated total trip time */}
            </Typography>
          </Box>
        );
      case 4:
        return <ReviewStep />;
      case 5:
        return <PersonalStep />;
      default:
        return null;
    }
  };

  return (
    <div className="plan-main">
      <div className="plan-overlay" />

      <div className="plan-nav">
        <Navbar />
      </div>

      <div className="steps-container">
        <Box sx={{ width: "100%" }}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            className="plan-stepper"
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton className="step-button" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box> */}
                <div className="plan-box-container" ref={spotsContainerRef}>
                  <Typography
                    className="plan-title"
                    variant="h2"
                    sx={{ mt: "3%" }}
                  >
                    Completed All steps
                  </Typography>
                  <Box
                    className="plan-box"
                    sx={{
                      maxHeight: 500, // Set the maximum height of the container
                      overflow: "auto", // Enable scrolling when content overflows
                    }}
                  >
                    <div className="spots-container">
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed have been completed - you&apos;re
                        finished.
                      </Typography>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        An itenary will be sent to your email shortly.
                      </Typography>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset} sx={{ ml: 25 }}>
                        Reset
                      </Button>
                    </div>
                  </Box>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography
                  className="plan-title"
                  variant="h2"
                  sx={{ mt: "3%" }}
                >
                  Step {activeStep + 1}
                </Typography>
                <div className="plan-box-container" ref={spotsContainerRef}>
                  <Box
                    className="plan-box"
                    sx={{
                      maxHeight: 500, // Set the maximum height of the container
                      overflow: "auto", // Enable scrolling when content overflows
                    }}
                  >
                    <div className="spots-container">
                      <Box>{renderStepContent(activeStep)}</Box>
                    </div>
                  </Box>

                  <div className="btn-container">
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="btn-back"
                      sx={{
                        backgroundColor: "#008080",
                        color: "#ffffff",
                        "&:hover": {
                          backgroundColor: "#00AAAA",
                        },
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      className="btn-more"
                      sx={{
                        backgroundColor: "#008080",
                        color: "#ffffff",
                        "&:hover": {
                          backgroundColor: "#00AAAA",
                        },
                      }}
                    >
                      Add More
                    </Button>
                    <Button
                      className="btn-next"
                      onClick={handleNext}
                      sx={{
                        backgroundColor: "#008080",
                        color: "#ffffff",
                        "&:hover": {
                          backgroundColor: "#00AAAA",
                        },
                      }}
                    >
                      Next
                    </Button>

                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography
                          variant="caption"
                          sx={{ display: "inline-block" }}
                        >
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button
                          className="btn-complete"
                          onClick={handleComplete}
                          sx={{
                            backgroundColor: "#008080",
                            color: "#ffffff",
                            "&:hover": {
                              backgroundColor: "#00AAAA",
                            },
                          }}
                        >
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "Complete Step"}
                        </Button>
                      ))}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default PlanYourVisit;
