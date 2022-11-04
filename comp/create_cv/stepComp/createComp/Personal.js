import { Button } from "@mui/material";

import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
// import {forwordStep} from '../../../stores/slices/profileCreation';
import {
  createForwordStep,
  createBackwordStep,
  personaldata,

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

import Image from "next/image";
const PersonalInfo = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const profileData = useSelector((state) => state.mainSteps.profileData);

  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState(profileData?.firstName);
  const [lastName, setlastName] = useState(profileData?.lastName);
  const [dob, setdob] = useState(profileData?.DateOfBirth);
  const [about, setabout] = useState(profileData?.about);
  const [gender, setgender] = useState(profileData?.gender);
  const [nationality, setnationality] = useState(profileData?.nationality);
  const [imageSrc, setimageSrc] = useState();
  const [imageFile, setimageFile] = useState();


  function AddpersonalData(e) {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      dob,
      about,
      gender,
      nationality,
      imageSrc,
      imageFile
    };
    dispatch(personaldata(data));
    dispatch(createForwordStep());
  }
  console.log(imageFile);
  function handleImage(e) {
    
    setimageFile(URL.createObjectURL(e.target.files[0]));
    setimageSrc(e.target.files[0]);

}
  return (
    <form onSubmit={(e) => AddpersonalData(e)} className={style.stepsPage}>
      <div className={style.inputs}>
        <Button variant="contained" component="label">
          Upload image
          <input
            hidden
            accept="image/*"
            
            type="file"
            onChange={(e) => handleImage(e)}
          />
        </Button>
      </div>
{imageFile && <img src={imageFile} width="100" height={"120"}/>}

      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="First Name"
          variant="outlined"

          size="small"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />

        <TextField
          className={style.input}
          label="Last Name"
          size="small"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          variant="outlined"
          required
        />
      </div>
      <div className={style.inputs}>
        <LocalizationProvider size="small" dateAdapter={AdapterDateFns}>
          <DatePicker
            label="date of birth"
            value={dob}
            inputFormat="dd-MM-yyyy"
            onChange={(e) => {
              setdob(e);
            }}
            className={style.input}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>

        <Box sx={{ minWidth: "17rem", marginLeft: "1rem" }}>
          <FormControl fullWidth size="small">

            <InputLabel id="Gender">Gender</InputLabel>
            <Select
              labelId="Gender"
              id="Gender-select"

              label="Gender"
              value={gender}
              onChange={(e) => {
                setgender(e.target.value);
              }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: "16rem", marginLeft: "1rem" }}>
          <FormControl fullWidth size="small">

            <InputLabel id="Nationality">Nationality </InputLabel>
            <Select
              labelId="Nationality"
              id="Nationality-select"

              value={nationality}
              label="Nationality "
              onChange={(e) => setnationality(e.target.value)}
            >
              <MenuItem value={"pakistan"}>pakistan</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>

            </Select>
          </FormControl>
        </Box>
      </div>

      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="About"
          type={"textarea"}
          variant="outlined"
          size="small"
          multiline
          rows={4}
          value={about}
          onChange={(e) => {
            setabout(e.target.value);
          }}
        />
      </div>
      <Button
        disabled={activeStep < 1}
        onClick={() => dispatch(createForwordStep())}
      >
        back
      </Button>

      <Button variant="contained" type="submit">
        next
      </Button>
    </form>

  );
};

export default PersonalInfo;
