import React, { useState } from "react";
import style from "../../../styles/cvCreation.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  CreateForwordStep,
  CreateFackwordStep,
} from "../../../stores/slices/profileCreation";

import { Container } from "@mui/system";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonalInfo from "./createComp/Personal";
import Contact from "./createComp/contact";
import Address from "./createComp/address";

import Education from "./createComp/Education";
import Experince from "./createComp/experince";
import Skills from "./createComp/skills";
import LangHobbies from "./createComp/lang_hobbies";
import { Divider } from "@mui/material";
import {forwordStep, backwordStep} from '../../../stores/slices/profileCreation';

const Create = ({page, handleSubmit}) => {
  const steps = useSelector((state) => state.mainSteps.createSteps);
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const createStep = useSelector((state) => state.mainSteps.createStep)

  //   const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch();
 

  return (
    <Container>
      <div className={style.pageContent}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step}</StepLabel>
              <StepContent>
                {(() => {
                  switch (activeStep) {
                    case 0:
                      return <PersonalInfo />;
                    case 1:
                      return <Contact />;
                    case 2:
                      return <Address />;
                    case 3:
                      return <Education />;
                    case 4:
                      return <Experince />;
                    case 5:
                      return <Skills />;
                    case 6:
                      return <LangHobbies />;

                    default:
                      return null;
                  }
                })()}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>

      <Divider sx={{margin: "1rem 0"}}/>
  
     {page? <div className={style.mainStesActions}>
        <Button>Skip</Button>
      <Button variant="contained" disabled={!createStep} onClick={()=> handleSubmit()}>Finish / Save</Button>

      </div> :
      <div className={style.mainStesActions}>
      <Button onClick={()=> dispatch(backwordStep())}>Back</Button>
      <Button variant="contained" disabled={!createStep} onClick={()=> dispatch(forwordStep())}>Next</Button>

    </div>
      }

    </Container>
  );
};

export default Create;
