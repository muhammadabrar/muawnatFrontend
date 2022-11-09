import React from "react";
import css from "../../styles/apply.module.css";
import { TextField } from "@mui/material";

const TextInput = ({
  englishText,
  urduText,
  key,
  stateDictKey,
  stateStore,
  onChangeHandler,
  placeholder,
  helper,
  validation
}) => {
  return (
    <div>
      <div className={css.Label}>
      <h1 data-aos={"fade-right"} className={css.textL}>{englishText}</h1>
      <h1 data-aos={"fade-left"} className={css.textR}>
        {urduText}
      </h1>
      </div>
      <TextField
        data-aos={"fade-up"}
        size="small"
        name={key}
        fullWidth
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

export default TextInput;
