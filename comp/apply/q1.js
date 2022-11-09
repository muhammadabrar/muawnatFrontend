import React from "react";
import css from "../../styles/apply.module.css";
import { Button, FormControlLabel, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
const Q1 = ({
  englishText,
  urduText,
  key,
  stateDictKey,
  stateStore,
  stepHandler,
  placeholder,
  helper,
  Ans1E,
  Ans1U,
  Ans2E,
  Ans2U,
}) => {
  return (
    <div className={css.checkboxWrap}>
      {/* <RadioGroup
        defaultValue={stateStore[stateDictKey]}
        name="radio-buttons-group"
        required
      //   onChange={}
      value={stateStore[stateDictKey]}
      onChange={(event) => stepHandler(event.target.value, stateDictKey)}

      >
        <div onClick={() => stepHandler(1, stateDictKey)} className={`${css.checkbox} ${stateStore[stateDictKey] == 1 && css.focus}`}>
          <FormControlLabel required value={1} control={<Radio />} />
          <div>
          <h1>{Ans1E}</h1>
          <h1 className="urdu" >{Ans1U}</h1>
          </div>
        </div>
        <div onClick={() => stepHandler(2, stateDictKey)} className={`${css.checkbox} ${stateStore[stateDictKey] == 2 && css.focus}`}>
          <FormControlLabel required value={2} control={<Radio />} />
          <div>
          <h1>{Ans2E}</h1>
          <h1 className="urdu" >{Ans2U}</h1>
          </div>
        </div>
      </RadioGroup> */}

      <button className={`${css.checkbox} btnG`}>
        {Ans1E} <br />
        <span className="urdu">{Ans1U}</span>
      </button>
      <button className={`${css.checkbox} btnG`}>
        {Ans2E}
        <br />
        <span className="urdu">{Ans2U}</span>
      </button>
    </div>
  );
};

export default Q1;
