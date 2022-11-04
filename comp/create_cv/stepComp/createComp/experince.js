import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createForwordStep,
  createBackwordStep,
  addExperince,
  removerExperince,
} from "../../../../stores/slices/profileCreation";
import style from "../../../../styles/cvCreation.module.css";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Experince = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const ExperinceData = useSelector(
    (state) => state.mainSteps.profileData.Experince
  );

  const dispatch = useDispatch();
  const [role, setrole] = useState();
  const [company, setcompany] = useState();
  const [start_date, setstart_date] = useState(null);
  const [end_date, setend_date] = useState(null);
  const [under_progress, setunder_progress] = useState(false);
  const [Detail, setDetail] = useState();

  function handleExperinceFrom(e) {
    e.preventDefault();
    const data = {
      role,
      company,
      start_date,
      end_date,
      under_progress,
      Detail,
    };
    dispatch(addExperince(data));

    setrole(null);
    setcompany(null);
    setstart_date(null);
    setend_date(null);
    setunder_progress(false);
    setDetail(null);
  }
  return (
    <form onSubmit={(e) => handleExperinceFrom(e)} className={style.stepsPage}>
      {ExperinceData?.map((data, i) => (
        <div key={i} className={style.card}>
          <div className={style.cardHeader}>
            <h3>
              {data.role} in {data.company}
            </h3>
            <IconButton
              color="error"
              onClick={() => dispatch(removerExperince(i))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <p>
            {String(data.start_date).slice(4, 16)} -{" "}
            {data.under_progress
              ? "Under progress"
              : String(data.end_date).slice(4, 16)}
          </p>
          <p>{data.Detail}</p>
        </div>
      ))}
      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Role"
          variant="outlined"
          size="small"
          placeholder="Web Developer"
          value={role}
          onChange={(e) => setrole(e.target.value)}
        />
      </div>
      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Company"
          variant="outlined"
          size="small"
          value={company}
          onChange={(e) => setcompany(e.target.value)}
        />
      </div>
      <div className={style.inputs}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start"
            value={start_date}
            onChange={(newValue) => {
              setstart_date(newValue);
            }}
            className={style.input}
            renderInput={(params) => (
              <TextField size="small" className={style.input} {...params} />
            )}
          />
        </LocalizationProvider>
        {!under_progress && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End"
              value={end_date}
              onChange={(newValue) => {
                setend_date(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} className={style.input} size="small" />
              )}
            />
          </LocalizationProvider>
        )}
        <Button
          variant={under_progress ? "contained" : "text"}
          onClick={() => setunder_progress(!under_progress)}
        >
          Under progress
        </Button>
      </div>
      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Detail"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          value={Detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <div className={style.inputs}>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </div>
      <Button
        disabled={activeStep < 1}
        onClick={() => dispatch(createBackwordStep())}
      >
        back
      </Button>
      <Button variant="contained" onClick={() => dispatch(createForwordStep())}>
        Skip / next
      </Button>
    </form>
  );
};

export default Experince;
