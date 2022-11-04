import {
  Button,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import { Container } from "@mui/system";
import React, { useState } from "react";
import style from "../../styles/cvCreation.module.css";
import Welcome from "./stepComp/welcome";
import Create from "./stepComp/create";
import { useDispatch, useSelector } from "react-redux";
import { forwordStep, backwordStep } from "../../stores/slices/profileCreation";

import Template from "./stepComp/template";

const Index = () => {
  const steps = ["Create", "Save / Download"];
  const activeStep = useSelector((state) => state.mainSteps.active);
  const err = useSelector((state) => state.mainSteps.err);
  const createStep = useSelector((state) => state.mainSteps.createStep);
  const dispatch = useDispatch();

  const isStepFailed = (step) => {
    return step === err;
  };
  return (
    <Container>
      <div className={'page'} style={{padding: '6rem 0'}}>

      <h1 style={{padding: '3rem 0', textAlign: 'center'}}>Create your CV</h1>

        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => {
            const labelProps = {};
            if (isStepFailed(index)) {
              labelProps.error = true;
            }

            return (
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {(() => {
          switch (activeStep) {
            case 0:
              return <Create />;
            case 2:
              return <Template />;

            case 3:
              return <h1>Save</h1>;
            default:
              return null;
          }
        })()}
      </div>
    </Container>
  );
};

export default Index;
