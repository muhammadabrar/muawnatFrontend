import React from "react";
import css from "../../styles/apply.module.css";
import { TextField } from "@mui/material";

const FileInput = ({
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
      <div className={css.fileWrap}>
      <p className={css.p}>Drag & Drop <br/> {stateStore[stateDictKey]?.length + " files selected"}</p>

      <input className={css.fileInput} required onChange={(event) => onChangeHandler(event.target.files, stateDictKey)} multiple type="file" />
      
      {/* <TextField
        data-aos={"fade-up"}
        size="small"
        name={key}
        fullWidth
        multiple
        type={"file"}
        onChange={(event) => onChangeHandler(event.target.value, stateDictKey)}
        value={stateStore[stateDictKey]}
        placeholder={placeholder}
        helperText={helper}
        required
      /> */}
      </div>
    </div>
  );
};

export default FileInput;
