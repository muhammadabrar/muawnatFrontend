import { Button } from "@mui/material";
import React, { useState } from "react";
import style from "../../../styles/cvCreation.module.css";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import {forwordStep} from '../../../stores/slices/profileCreation';
const Welcome = () => {
    const activeStep = useSelector((state) => state.mainSteps.value)
    const dispatch = useDispatch();
  return (
    <div className={style.pageContent}>
      <h1>Create your CV</h1>
      <p>
        You can start from your profile, choose to update a CV stored in your
        library, import a Europass CV or create a new one. Your choice!
      </p>
      <div className={style.actions}>
        <Button
          className={style.btn}
          size="large"
          startIcon={<PersonIcon />}
          variant="contained"
          disabled
        >
          Start from your profile
        </Button>
        <Button
          className={style.btn}
          size="large"
          startIcon={<FolderIcon />}
          variant="contained"
          disabled
        >
          Select from My Library
        </Button>
        <Button
          className={style.btn}
          size="large"
          startIcon={<FileUploadIcon />}
          variant="contained"
        >
          Import Europass CV
        </Button>
        <Button
          className={style.btn}
          size="large"
          startIcon={<EditIcon />}
          variant="contained"
            onClick={()=> dispatch(forwordStep())}
        >
          Create new CV
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
