import React from "react";
import css from "../../styles/apply.module.css";
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const GenderInput = ({
  englishText,
  urduText,
  key,
  stateDictKey,
  stateStore,
  onChangeHandler,
  placeholder,
  helper
}) => {
  return (
    <div>
      <h1 data-aos={"fade-right"}>{englishText}</h1>
      <h1 data-aos={"fade-left"} className={css.textR}>
        {urduText}
      </h1>
      <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        onChange={(event) => onChangeHandler(event.target.value, stateDictKey)}
        value={stateStore[stateDictKey]}
        required
        defaultValue={stateStore[stateDictKey]}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    </div>
  );
};

export default GenderInput;
