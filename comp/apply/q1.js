import React from "react";
import css from "../../styles/apply.module.css";
import { FormControlLabel, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
const Q1 = ({
  englishText,
  urduText,
  key,
  stateDictKey,
  stateStore,
  onChangeHandler,
  placeholder,
  helper,
  Ans1E,
  Ans1U,
  Ans2E,
  Ans2U
}) => {
  return (
    <div className={css.checkboxWrap}>


      <RadioGroup
        defaultValue={stateStore[stateDictKey]}
        name="radio-buttons-group"
        required
      //   onChange={}
      value={stateStore[stateDictKey]}
      onChange={(event) => onChangeHandler(event.target.value, stateDictKey)}

      >
        <div onClick={() => onChangeHandler(1, stateDictKey)} className={`${css.checkbox} ${stateStore[stateDictKey] == 1 && css.focus}`}>
          <FormControlLabel required value={1} control={<Radio />} />
          <div>
          <h1>{Ans1E}</h1>
          <h1>{Ans1U}</h1>
          </div>
        </div>
        <div onClick={() => onChangeHandler(2, stateDictKey)} className={`${css.checkbox} ${stateStore[stateDictKey] == 2 && css.focus}`}>
          <FormControlLabel required value={2} control={<Radio />} />
          <div>
          <h1>{Ans2E}</h1>
          <h1>{Ans2U}</h1>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default Q1;
