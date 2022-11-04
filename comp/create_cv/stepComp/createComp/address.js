import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../../../styles/cvCreation.module.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import {
  createForwordStep,
  createBackwordStep,

  addAddress,

} from "../../../../stores/slices/profileCreation";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
const Address = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);

  const data = useSelector((state) => state.mainSteps.profileData.address);

  const dispatch = useDispatch();
  const [address, setaddress] = useState(data.address);
  const [address_line_2, setaddress_line_2] = useState(data.address_line_2);
  const [city, setcity] = useState(data.city);
  const [postal_code, setpostal_code] = useState(data.postal_code);
  const [country, setcountry] = useState(data.country);

  function handleAddress(e) {
    e.preventDefault();
    const data = {
      address,
      address_line_2,
      city,
      postal_code,
      country,
    };
    dispatch(addAddress(data));
    dispatch(createForwordStep());
  }
  return (
    <form onSubmit={(e) => handleAddress(e)} className={style.stepsPage}>

      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Address"
          variant="outlined"
          size="small"
          required
          value={address}
          onChange={(e) => setaddress(e.target.value)}

        />
      </div>
      <div className={style.inputs}>
        <TextField
          className={style.input}

          label="Address Line 2"
          variant="outlined"
          size="small"
          value={address_line_2}
          onChange={(e) => setaddress_line_2(e.target.value)}

        />
      </div>
      <div className={style.inputs}>
        <TextField
          label="City"
          variant="outlined"
          className={style.input}
          size="small"

          value={city}
          onChange={(e) => setcity(e.target.value)}
          required

        />
      </div>
      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Postal Code"
          variant="outlined"
          size="small"
          required
          value={postal_code}
          onChange={(e) => setpostal_code(e.target.value)}

        />
      </div>
      <div className={style.inputs}>
        <Box className={style.input}>

          <FormControl fullWidth size="small">
            <InputLabel id="Country">Country</InputLabel>
            <Select
              labelId="Country"
              id="Country-select"
              label="Country"
              required
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              
            >
              <MenuItem value={"Pakistan"}>Pakistan</MenuItem>

              <MenuItem value={"Home"}>Home</MenuItem>
              <MenuItem value={"Mobile"}>Mobile</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Button
        disabled={activeStep < 1}
        onClick={() => dispatch(createBackwordStep())}
      >
        back
      </Button>
      <Button variant="contained" type="submit">
        next
      </Button>
    </form>
  );
};

export default Address;
