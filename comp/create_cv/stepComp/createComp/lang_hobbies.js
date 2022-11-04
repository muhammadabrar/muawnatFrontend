import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createForwordStep,
  createBackwordStep,
  addlanguages,
  removerlanguages,
  addhobbies,
  removerhobbies,
} from "../../../../stores/slices/profileCreation";
import style from "../../../../styles/cvCreation.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

const LangHobbies = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const dispatch = useDispatch();
  const languages = useSelector(
    (state) => state.mainSteps.profileData.languages
  );
  const [language, setlanguage] = useState();
  const [hobby, sethobby] = useState();
  const hobbies = useSelector((state) => state.mainSteps.profileData.hobbies);
  function submitLanguage(e) {
    e.preventDefault();
    dispatch(addlanguages(language));
    setlanguage("");
  }
  function submithobby(e) {
    e.preventDefault();
    dispatch(addhobbies(hobby));
    sethobby("");
  }
  return (
    <div className={style.stepsPage}>
      <Stack direction="row" spacing={1} sx={{ margin: "1rem 0" }}>
        {languages?.map((language, i) => (
          <Chip key={i}
            color="info"
            label={language}
            onDelete={() => dispatch(removerlanguages(i))}
          />
        ))}
      </Stack>
      <form onSubmit={(e) => submitLanguage(e)} className={style.inputs}>
        <TextField
          className={style.input}
          label="Languages"
          variant="outlined"
          size="small"
          placeholder="English"
          value={language}
          required
          onChange={(e) => setlanguage(e.target.value)}
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
      <Divider />
      <Stack direction="row" spacing={1} sx={{ margin: "1rem 0" }}>
        {hobbies?.map((hobby, i) => (
          <Chip key={i}
            color="info"
            label={hobby}
            onDelete={() => dispatch(removerhobbies(i))}
          />
        ))}
      </Stack>
      <form onSubmit={(e) => submithobby(e)} className={style.inputs}>
        <TextField
          className={style.input}
          label="Hobbies"
          variant="outlined"
          size="small"
          required

          placeholder="photography"
          value={hobby}
          onChange={(e) => sethobby(e.target.value)}
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>

      <Button
        disabled={activeStep < 1}
        onClick={() => dispatch(createBackwordStep())}
      >
        back
      </Button>
    </div>
  );
};

export default LangHobbies;
