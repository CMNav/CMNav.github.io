// import React from "react";
// import Navbar from "../components/navbar";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "../styles/PlanYourVisit.css";
// import SpotsStep from "../components/PlanYourVisit/SpotsStep";

// const steps = [
//   "Choose Spots to go to",
//   "Choose Events to attend",
//   "Choose Resturants",
//   "Choose Transportation",
//   "Review Details",
//   "Personal Information",
// ];

// const PlanYourVisit = () => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? // It's the last step, but not all steps have been completed,
//           // find the first step that has been completed
//           steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <SpotsStep />; // Render the SpotsStep component
//       case 1:
//         return null;
//       case 2:
//         return null;
//       case 3:
//         return null;
//       case 4:
//         return null;
//       case 5:
//         return null;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="plan-main">
//       <div className="plan-overlay" />

//       <div className="plan-nav">
//         <Navbar />
//       </div>

//       <div className="steps-container">
//         <Box sx={{ width: "100%" }}>
//           <Stepper
//             alternativeLabel
//             activeStep={activeStep}
//             className="plan-stepper"
//           >
//             {steps.map((label, index) => (
//               <Step key={label} completed={completed[index]}>
//                 <StepButton className="step-button" onClick={handleStep(index)}>
//                   {label}
//                 </StepButton>
//               </Step>
//             ))}
//           </Stepper>
//           <div>
//             {allStepsCompleted() ? (
//               <React.Fragment>
//                 <Typography sx={{ mt: 2, mb: 1 }}>
//                   All steps completed - you&apos;re finished
//                 </Typography>
//                 <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                   <Box sx={{ flex: "1 1 auto" }} />
//                   <Button onClick={handleReset}>Reset</Button>
//                 </Box>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <Typography className="plan-title" variant="h2">
//                   Step {activeStep + 1}
//                 </Typography>
//                 <div className="plan-box-container">
//                   <Box className="plan-box">
//                     <Box className="spots-container">
//                       {renderStepContent(activeStep)}
//                     </Box>
//                   </Box>

//                   <div className="btn-container">
//                     <Button
//                       disabled={activeStep === 0}
//                       onClick={handleBack}
//                       className="btn-back"
//                     >
//                       Back
//                     </Button>
//                     <Button className="btn-more">Add More</Button>
//                     <Button className="btn-next" onClick={handleNext}>
//                       Next
//                     </Button>

//                     {activeStep !== steps.length &&
//                       (completed[activeStep] ? (
//                         <Typography
//                           variant="caption"
//                           sx={{ display: "inline-block" }}
//                         >
//                           Step {activeStep + 1} already completed
//                         </Typography>
//                       ) : (
//                         <Button
//                           className="btn-complete"
//                           onClick={handleComplete}
//                         >
//                           {completedSteps() === totalSteps() - 1
//                             ? "Finish"
//                             : "Complete Step"}
//                         </Button>
//                       ))}
//                   </div>
//                 </div>
//               </React.Fragment>
//             )}
//           </div>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default PlanYourVisit;

import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/PlanYourVisit.css";
import SpotsStep from "../components/PlanYourVisit/SpotsStep";

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
        return <SpotsStep />; // Render the SpotsStep component
      case 1:
        return null;
      case 2:
        return null;
      case 3:
        return null;
      case 4:
        return null;
      case 5:
        return null;
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
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
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
