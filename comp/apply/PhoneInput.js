import React from "react";
import css from "../../styles/apply.module.css";
import { TextField } from "@mui/material";

const PhoneInput = ({
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
      <div className={css.Label}>
      
      <h1 data-aos={"fade-right"}>{englishText}</h1>
      <h1 data-aos={"fade-left"} className={css.textR}>
        {urduText}
      </h1>
      </div>
      <TextField
        data-aos={"fade-up"}
        size="small"
        name={key}
        fullWidth
        inputProps={{ inputMode: "text", pattern: "[0-9]{11}" }}

        type={"text"}
        onChange={(event) => onChangeHandler(event.target.value, stateDictKey)}
        value={stateStore[stateDictKey]}
        placeholder={placeholder}
        helperText={helper}
        required
      />
    </div>
  );
};

export default PhoneInput;
