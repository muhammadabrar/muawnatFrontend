import React, { useState } from "react";
import css from "../../styles/apply.module.css";
import { Button, TextField } from "@mui/material";

const PhotoInput = ({
  englishText,
  urduText,
  key,
  stateDictKey,
  stateStore,
  onChangeHandler,
  placeholder,
  helper,
  validation,
  multiple,
}) => {
  const [imageSrc, setimageSrc] = useState();
  const [imageFile, setimageFile] = useState();

  function handleImage(e) {

    setimageFile(URL.createObjectURL(e.target.files[0]));
    onChangeHandler(e.target.files[0], stateDictKey)
  }
  return (
    <div>
      <h1 data-aos={"fade-right"}>{englishText}</h1>
      <h1 data-aos={"fade-left"} className={css.textR}>
        {urduText}
      </h1>

      <Button variant="contained" component="label">
        Upload image
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={(e) => handleImage(e)}
        />
      </Button>
      {imageFile && <img src={imageFile} width="100" height={"120"} />}

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
  );
};

export default PhotoInput;
