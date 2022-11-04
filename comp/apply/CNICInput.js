import React from "react";
import css from "../../styles/apply.module.css";
import { TextField } from "@mui/material";

const CNICInput = ({
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
      <TextField
        data-aos={"fade-up"}
        size="small"
        name={key}
        fullWidth
        inputProps={{ inputMode: "numeric", pattern: "[0-9]{5}-[0-9]{7}-[0-9]{1}" }}


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

export default CNICInput;
