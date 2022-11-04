import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createForwordStep,
  createBackwordStep,
  addEducation,
  removerEducation,
} from "../../../../stores/slices/profileCreation";
import style from "../../../../styles/cvCreation.module.css";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const Education = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const EducationData = useSelector(
    (state) => state.mainSteps.profileData.Education
  );

  const dispatch = useDispatch();
  const [degree, setdegree] = useState(null);
  const [field, setfield] = useState();
  const [organization, setorganization] = useState();
  const [start_date, setstart_date] = useState(null);
  const [end_date, setend_date] = useState(null);
  const [under_progress, setunder_progress] = useState(false);
  function handleEducationFrom(e) {
    e.preventDefault();
    const data = {
      degree,
      field,
      start_date,
      end_date,
      start_date,
      end_date,
      under_progress,
      organization,
    };
    dispatch(addEducation(data));
    setfield(null);
    setstart_date(null);
    setend_date(null);
    setunder_progress(false);
    setorganization(null);
  }
  return (
    <div className={style.stepsPage}>
      {EducationData?.map((data, i) => (
        <div key={i} className={style.card}>
          <div className={style.cardHeader}>
            <h3>
              {data.degree} in {data.field}
            </h3>
            <IconButton
              color="error"
              onClick={() => dispatch(removerEducation(i))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <p>{data.organization}</p>
          <p>
            {String(data.start_date).slice(4, 16)} -{" "}
            {data.under_progress
              ? "Under progress"
              : String(data.end_date).slice(4, 16)}
          </p>
        </div>
      ))}
      <form
        onSubmit={(e) => handleEducationFrom(e)}
        className={style.stepsPage}
      >
        <div className={style.inputs}>
          <Box sx={{ minWidth: "17rem" }}>
            <FormControl fullWidth size="small" required>
              <InputLabel id="Degree">Degree</InputLabel>
              <Select
                labelId="Degree"
                id="Degree-select"
                value={degree}
                label="Degree"
                onChange={(e) => setdegree(e.target.value)}
              >
                <MenuItem value={"Master of Science"}>
                  Master of Science (MS)
                </MenuItem>
                <MenuItem value={"Master of Art"}>Master of Art (MA)</MenuItem>
                <MenuItem value={"Bachelor of Science (BSc"}>
                  Bachelor of Science
                </MenuItem>
                <MenuItem value={"Bachelor of Science (BS)"}>
                  Bachelor of Science (Hons)
                </MenuItem>
                <MenuItem value={"Bachelor of Art (BA)"}>
                  Bachelor of Art
                </MenuItem>
                <MenuItem value={"Faculty of Science"}>
                  Faculty of Science (FSc)
                </MenuItem>
                <MenuItem value={"Faculty of Art"}>
                  Faculty of Art (FA)
                </MenuItem>
                <MenuItem value={"Matric"}>Matric</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={style.inputs}>
          <TextField
            className={style.input}
            label="Field / Subject"
            variant="outlined"
            size="small"
            placeholder="Computer Science"
            required
            value={field}
            onChange={(e) => setfield(e.target.value)}
          />
        </div>
        <div className={style.inputs}>
          <TextField
            className={style.input}
            label="University  / college / School"
            variant="outlined"
            size="small"
            placeholder="MIT"
            value={organization}
            onChange={(e) => setorganization(e.target.value)}
          />
        </div>

        <div className={style.inputs}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start"
              onChange={(newValue) => {
                setstart_date(newValue);
              }}
              value={start_date}
              placeholder="starting date"
              renderInput={(params) => (
                <TextField
                  className={style.input}
                  required
                  size="small"
                  {...params}
                  placeholder="starting date"
                />
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
                  <TextField
                    className={style.input}
                    {...params}
                    size="small"
                    required
                  />
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

        <Button
          disabled={activeStep < 1}
          onClick={() => dispatch(createForwordStep())}
          variant="contained"
        >
          Next / Skip
        </Button>
      </form>
    </div>
  );
};

export default Education;
