import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import css from "../../styles/apply.module.css";
import TextInput from "./textInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Q1 from "./q1";
import PhoneInput from "./PhoneInput";
import CNICInput from "./CNICInput";
import GenderInput from "./genderInput";
import FileInput from "./FileInput";
import PhotoInput from "./photoInput";
import axios from "axios";
import CNICError from "./CNICError";
import Success from "./Success";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import {MQuestions, DQuestions} from './Questions';
const Steps = () => {
  var MQuestions = [
    <Q1
      // stateDictKey="Education"
      // key="Education"
      // englishText="What is your education?"
      // urduText="آپ کی تعلیم کیا ہے؟"
      stateDictKey="candidateType"
      key="candidateType"

      Ans1U={"میٹرک یا میٹرک سے نیچے"}
      Ans1E="Matric or Below Matric"
      Ans2E={"Intermediate or Higher"}
      Ans2U="انٹرمیڈیٹ یا اس سے زیادہ"
    />,
    <TextInput
      stateDictKey="Name"
      key="Name"
      englishText="Your name"
      urduText="آپ کا نام"
      placeholder="Enter Your Name"
    />,
    <TextInput
      stateDictKey="fName"
      key="fName"
      englishText="Your father's name"
      urduText="آپ کے والد کا نام"
      placeholder="Enter Your Father Name"
    />,
    <TextInput
      stateDictKey="age"
      key="age"
      englishText="Your age"
      urduText="آپ کی عمر"
      placeholder="Enter Your Age"
    />,
    <GenderInput
      stateDictKey="gender"
      key="gender"
      englishText="Gender"
      urduText="آپ کی جنس "
      placeholder="Select Your Gender"
    />,
    <CNICInput
      stateDictKey="CNIC"
      key="CNIC"
      englishText="Your CNIC No"
      urduText="آپ کا شناختی کارڈ نمبر"
      placeholder="Enter Your CNIC"
      helper="Enter your CNIC(eg. 1620312345671)"
    />,
    <PhoneInput
      stateDictKey="phone"
      key="phone"
      englishText="Your phone number"
      urduText="آپ کا فون نمبر"
      placeholder="03123456789"
      helper={"Enter your phone number (eg. 03123456789)"}
    />,
    <TextInput
      stateDictKey="workExperience"
      key="workExperience"
      englishText="Do you have any previous work experience?"
      urduText="کیا آپ کے پاس کوئی سابقہ ​​کام کا تجربہ ہے؟"
      placeholder="Write Your Name work experience"
      helper="if your have not previous work experience then type Null"
    />,
    <TextInput
      stateDictKey="Country"
      key="Country"
      englishText="Have you worked in any country before?"
      urduText="کیا آپ نے پہلے کسی ملک میں کام کیا ہے"
      placeholder="Enter the country before if not just enter No"
      helper="if did not work in any country before just type Null"
    />,
    <TextInput
      stateDictKey="skill"
      key="skill"
      englishText="Your skill?"
      urduText="آپ کی مہارت"
      placeholder="Enter Your Skills"
      helper="If You don't have any skills just type Null"
    />,
    <FileInput
      stateDictKey="Files"
      key="Files"
      englishText="Upload Relevant documents"
      urduText="متعلقہ دستاویزات جیسے کے تجربہ سرٹیفیکیٹ، تعلیمی اسناد ، وغیرہ"
      placeholder="Passign Year"
    />,
    <PhotoInput
      stateDictKey="photo"
      key="photo"
      englishText="Upload Passport size Photo."
      urduText="پاسپورٹ سائز تصویر۔"
      placeholder="Passign Year"
    />,
  ];
  var DQuestions = [
    <Q1
      // stateDictKey="Education"
      // key="Education"
      // englishText="What is your education?"
      // urduText="آپ کی تعلیم کیا ہے؟"
      stateDictKey="candidateType"
      key="candidateType"
      errMsg="Please Enter Your Name"
      placeholder="Enter Your Name"
      Ans1U={"میٹرک اور انڈر میٹرک"}
      Ans1E="Matric & Below Matric"
      Ans2E={"Intermediate & Higher"}
      Ans2U="انٹرمیڈیٹ اور ہائر"
    />,
    <TextInput
      stateDictKey="name"
      key="name"
      englishText="What is your name?"
      urduText="آپ کا نام کیا ہے؟"
      placeholder="Enter Your Name"
    />,
    <TextInput
      stateDictKey="fName"
      key="fName"
      englishText="What is your father's name?"
      urduText="آپ کے والد کا نام کیا ہے؟"
      placeholder="Enter Your Father Name"
    />,
    <TextInput
      stateDictKey="age"
      key="age"
      englishText="What is your age?"
      urduText="آپ کی عمر کیا ہے؟"
      placeholder="Enter Your Age"
    />,
    <GenderInput
      stateDictKey="gender"
      key="gender"
      englishText="What is your gender?"
      urduText="آپ کی جنس کیا ہے؟"
      placeholder="Select Your Gender"
    />,
    <CNICInput
      stateDictKey="CNIC"
      key="CNIC"
      englishText="What is Your CNIC No?"
      urduText="آپ کا سی ان آی سی نمبر کیا ہے؟"
      placeholder="Enter Your CNIC"
      helper="Enter your CNIC(eg. 1620312345671)"
    />,
    <PhoneInput
      stateDictKey="phone"
      key="phone"
      englishText="What is your phone number?"
      urduText="آپ کا فون نمبر کیا ہے؟"
      placeholder="+92-312-3456789"
      helper={"Enter your phone number (eg. +92 3123456789)"}
    />,
    <TextInput
      stateDictKey="workExperience"
      key="workExperience"
      englishText="Do you have any previous work experience?"
      urduText="کیا آپ کے پاس کوئی سابقہ ​​کام کا تجربہ ہے؟"
      placeholder="Write Your Name work experience"
      helper="if your have not previous work experience then type Null"
    />,
    <TextInput
      stateDictKey="Country"
      key="Country"
      englishText="Have you worked in any country before?"
      urduText="کیا آپ نے پہلے کسی ملک میں کام کیا ہے"
      placeholder="Enter the country before if not just enter No"
      helper="if did not work in any country before just type Null"
    />,
    <TextInput
      stateDictKey="skill"
      key="skill"
      englishText="What is your skill?"
      urduText="آپ کی مہارت کیا ہے؟"
      placeholder="Enter Your Skills"
      helper="If You don't have any skills just type Null"
    />,
    <TextInput
      stateDictKey="Education"
      key="Education"
      englishText="What is your education?"
      urduText="آپ کی تعلیم کیا ہے؟"
      placeholder="Enter Your Education"
    />,
    <TextInput
      stateDictKey="University"
      key="University"
      englishText="What university degree do you have?"
      urduText="آپ کے پاس کس یونیورسٹی کی ڈگری ہے؟"
      placeholder="Enter Your University Name"
    />,

    <TextInput
      stateDictKey="Passing_Year"
      key="Passing_Year"
      englishText="In which year did you pass your degree?"
      urduText="آپ نے کس سال میں ڈگری پاس کی؟"
      placeholder="Passign Year"
    />,
    <FileInput
      stateDictKey="Files"
      key="Files"
      englishText="upload Important files."
      urduText="اہم فائلیں اپ لوڈ کریں۔"
      placeholder="Passign Year"
      multiple={true}
    />,
    <PhotoInput
      stateDictKey="photo"
      key="photo"
      englishText="Upload Passport size Photo."
      urduText="پاسپورٹ سائز تصویر اپ لوڈ کریں۔"
      placeholder="Passign Year"
      multiple={false}
    />,
  ];
  const [step, setStep] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [IsErr, setIsErr] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [stateStore, setStateStore] = useState({
    candidateType: 1,
    gender: "female",
    phone: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(stateStore);
    stateStore.candidateType == "2"
      ? DQuestions.length - 1 == step
        ? saveData()
        : nextStep()
      : MQuestions.length - 1 == step
      ? saveData()
      : nextStep();
  };

  async function saveData() {
    setLoading(true);
    const PhotoName = `${stateStore.CNIC} - ${stateStore.photo.name}`;

    // const file  = new File(data.pp, 'new name')
    var FilesName = [];
    const formData = new FormData();
    formData.append("files", stateStore.photo, PhotoName);
    for (let i = 0; i < stateStore.Files.length; i++) {
      const filename = `${stateStore.CNIC} - ${i} - ${stateStore.Files[i].name}`;
      formData.append("files", stateStore.Files[i], filename);
      FilesName.push(filename);
    }
    const Alldata = JSON.stringify({
      candidateType: stateStore.candidateType,
      name: stateStore.name,
      fName: stateStore.fName,
      age: stateStore.age,
      gender: stateStore.gender,
      phone: stateStore.phone,
      CNIC: stateStore.CNIC,
      workExperience: stateStore.workExperience,
      photo: PhotoName,
      Education: stateStore.Education,
      University: stateStore.University,
      Passing_Year: stateStore.Passing_Year,
      Country: stateStore.Country,
      Files: FilesName,
    });
    formData.append("data", Alldata);

    await axios
      .post("http://localhost:8000/postData", formData)
      .then(function (response) {
        setLoading(false);
        setisSuccess(true);
        console.log(response);
      })
      .catch(function (error) {
        setLoading(false);

        console.log(error.response.status);
        console.log(error);

        if (error.response.status == 400) {
          console.log("400: " + error);
          setIsErr(true);
        }
      });
  }

  const getStep = () => {
    if (stateStore.candidateType == "2") {
      return React.cloneElement(DQuestions[step], {
        stateStore: stateStore,
        onChangeHandler: onChangeHandler,
      });
    }
    return React.cloneElement(MQuestions[step], {
      stateStore: stateStore,
      onChangeHandler: onChangeHandler,
      stepHandler: step==0  && stepHandler
    });
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const onChangeHandler = (value, key) => {
    setStateStore({ ...stateStore, [key]: value });
  };

  const stepHandler = (value, key) => {
    setStateStore({ ...stateStore, [key]: value });
    onSubmit()
  };

  return (
    <>
      <div className={css.card}>
          {/* <TextInput/> */}
          {Loading ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={Loading}
              
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : IsErr ? (
            <CNICError />
          ) : isSuccess ? (
            <Success />
          ) : (
        <form onSubmit={onSubmit}>

            {getStep()}
            {!step==0 && <div className={css.actions}>
            <Button
              startIcon={<ArrowBackIcon />}
              variant="contained"
              color="inherit"
              onClick={() => prevStep()}
              disabled={step == 0}
            >
              Previous
            </Button>
            <Button
              endIcon={<ArrowForwardIcon />}
              className={css.btn}
              variant="contained"
              type="submit"
            >
              {stateStore.candidateType == "2"
                ? DQuestions.length - 1 == step
                  ? "Submit"
                  : "Next"
                : MQuestions.length - 1 == step
                ? "Submit"
                : "Next"}
            </Button>
          </div>}
        </form>
          )}
          
      </div>
    </>
  );
};

export default Steps;
