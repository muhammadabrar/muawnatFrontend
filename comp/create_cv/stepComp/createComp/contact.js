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

  addPhone,
  removerPhone,
  addSocailMedia,
  removerSocailMedia,
  addEmail,
} from "../../../../stores/slices/profileCreation";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
// import { set } from "date-fns";
const Contact = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const socailmedia = useSelector(
    (state) => state.mainSteps.profileData.socailmedia
  );
  const phone = useSelector((state) => state.mainSteps.profileData.phone);

  const email = useSelector((state) => state.mainSteps.profileData.email);

  const dispatch = useDispatch();
  const [phoneNo, setphoneNo] = useState();
  const [type, settype] = useState("Work");
  const [code, setcode] = useState("+1");
  const [socailMedia, setSocailMedia] = useState("Facebook");
  const [Link, setLink] = useState();
  const [phoneNo_err, setphoneNo_err] = useState(false);
  const [socailMedia_err, setsocailMedia_err] = useState(false);

  function addphoneNo(e) {
    e.preventDefault();
    if (!phoneNo) {
      setphoneNo_err(true);
      return null;
    }
    const data = {
      phoneNo,
      type,
      code,
    };

    dispatch(addPhone(data));
    setphoneNo("");
    setphoneNo_err(false);
  }

  function add_SocailMedia(e) {
    e.preventDefault();
    if (!Link) {
      setsocailMedia_err(true);
      return null;
    }
    const data = {
      Link,
      socailMedia,
    };

    dispatch(addSocailMedia(data));
    setLink("");
    setsocailMedia_err(false);
  }
  return (
    <div className={style.stepsPage}>

      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Email"

          value={email}
          onChange={(e) => dispatch(addEmail(e.target.value))}
          variant="outlined"
          type="email"
          size="small"
        />
      </div>
      <h4>Phone Number</h4>

      {phone.map((phone, i) => (
        <div key={i}>
          <div className={style.rowData}>
            <p>
              {phone}
            </p>
            <IconButton color="error" onClick={() => dispatch(removerPhone(i))}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
        </div>
      ))}
      <form onSubmit={(e) => addphoneNo(e)}>
        <div className={style.inputs}>
          <Box sx={{ minWidth: "10rem", marginRight: "2rem" }}>
            <FormControl fullWidth size="small" required>
              <InputLabel id="Type">Select Type</InputLabel>
              <Select
                labelId="Type"
                id="Type-select"
                value={type}
                onChange={(e) => settype(e.target.value)}
                label="Select Type"
                required
                placeholder="+1"
                //   onChange={handleChange}
              >
                <MenuItem value={"Work"}>Work</MenuItem>
                <MenuItem value={"Home"}>Home</MenuItem>
                <MenuItem value={"Mobile"}>Mobile</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ minWidth: "5rem", margin: "0 1rem" }}>
              <FormControl fullWidth size="small">
                {/* <InputLabel id="role">Code</InputLabel> */}
                <Select
                  labelId="role"
                  id="role-select"
                  value={code}
                  onChange={(e) => setcode(e.target.value)}
                  required
                  //   onChange={handleChange}
                >
                  <MenuItem value={"+1"}>+1</MenuItem>
                  <MenuItem value={"+92"}>+92</MenuItem>
                  <MenuItem value={"+92"}>+92</MenuItem>
                  <MenuItem value={"+92"}>+92</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              className={style.input}
              label="Phone"
              variant="outlined"
              type="tel"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]{10}" }}
              size="small"
              error={phoneNo_err}
              required
            />
            <IconButton color="primary" type="submit">
              <AddIcon />
            </IconButton>
          </Box>
        </div>
      </form>
      <Divider />
      <h4>Socail Media</h4>
      {socailmedia.map((media, i) => (
        <div key={i}>
          <div className={style.rowData}>
            <p>
              {media.socailMedia}: {media.Link}
            </p>
            <IconButton
              color="error"
              onClick={() => dispatch(removerSocailMedia(i))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
        </div>
      ))}
      <form onSubmit={(e) => add_SocailMedia(e)}>
        <div className={style.inputs}>
          <Box sx={{ minWidth: "10rem", marginRight: "2rem" }}>
            <FormControl fullWidth size="small">
              <InputLabel id="Socail">Socail Media </InputLabel>
              <Select
                labelId="Socail"
                id="Socail-select"
                value={socailMedia}
                onChange={(e) => setsocailMedia(e.target.value)}
                label="Socail Media  "
                //   onChange={handleChange}
              >
                <MenuItem value={"Facebook"}>Facebook</MenuItem>
                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                <MenuItem value={"Github"}>Github</MenuItem>
                <MenuItem value={"Tweeter"}>Tweeter</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              className={style.input}
              label="Link"
              variant="outlined"
              type="url"
              size="small"
              value={Link}
              required
              onChange={(e) => setLink(e.target.value)}
            />

            <IconButton color="primary" type="submit">
              <AddIcon />
            </IconButton>
          </Box>
        </div>
      </form>
      <Button
        disabled={activeStep < 1}
        onClick={() => dispatch(createBackwordStep())}
      >
        back
      </Button>
      <Button variant="contained" onClick={() => dispatch(createForwordStep())}>
        next
      </Button>
    </div>
  );
};

export default Contact;
