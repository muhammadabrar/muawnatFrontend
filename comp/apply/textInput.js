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
      <h1 data-aos={"fade-right"}>{englishText}</h1>
      <h1 data-aos={"fade-left"} className={css.textR}>
        {urduText}
      </h1>
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
