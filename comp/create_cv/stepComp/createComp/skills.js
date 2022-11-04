import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createForwordStep,
  createBackwordStep,
  removerSkills,
  addSkills,
  removerDigitalSkills,
  addDigitalSkills,
  addComunicationSkill,
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
const Skills = () => {
  const activeStep = useSelector((state) => state.mainSteps.createActiveStep);
  const ComunicationSkill = useSelector(
    (state) => state.mainSteps.profileData.comunicationSkill
  );
  const Skills = useSelector((state) => state.mainSteps.profileData.Skills);

  const digitalSkills = useSelector(
    (state) => state.mainSteps.profileData.digitalSkills
  );

  const dispatch = useDispatch();

  const [Skill, setSkill] = useState();
  const [DigitalSkill, setDigitalSkill] = useState();
  function submitSkill(e) {
    e.preventDefault();
    dispatch(addSkills(Skill));
    setSkill("");
  }
  function submitDigitalSkill(e) {
    e.preventDefault();
    dispatch(addDigitalSkills(DigitalSkill));
    setDigitalSkill("");
  }
  return (
    <div className={style.stepsPage}>
      <Stack direction="row" spacing={1} sx={{ margin: "2rem 0" }}>
        {Skills?.map((skill, i) => (
          <Chip key={i}
            color="info"
            label={skill}
            onDelete={() => dispatch(removerSkills(i))}
          />
        ))}
      </Stack>
      <form onSubmit={(e) => submitSkill(e)} className={style.inputs}>
        <TextField
          className={style.input}
          label="Skill"
          variant="outlined"
          size="small"
          placeholder="Web Developer"
          value={Skill}
          onChange={(e) => setSkill(e.target.value)}
          required
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
      <Divider />
      <Stack direction="row" spacing={1} sx={{ margin: "1rem 0" }}>
        {digitalSkills?.map((skill, i) => (
          <Chip key={i}
            color="info"
            label={skill}
            onDelete={() => dispatch(removerDigitalSkills(i))}
          />
        ))}
      </Stack>
      <form onSubmit={(e) => submitDigitalSkill(e)} className={style.inputs}>
        <TextField
          className={style.input}
          label="Digital Skills"
          variant="outlined"
          size="small"
          placeholder="Web Developer"
          value={DigitalSkill}
          onChange={(e) => setDigitalSkill(e.target.value)}
          required
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
      <Divider />

      <div className={style.inputs}>
        <TextField
          className={style.input}
          label="Comunication Skills"
          variant="outlined"
          size="small"
          value={ComunicationSkill}
          onChange={(e) => dispatch(addComunicationSkill(e.target.value))}
        />
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
    </div>
  );
};

export default Skills;
