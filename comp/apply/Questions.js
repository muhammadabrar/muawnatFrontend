import Q1 from "./q1";
import PhoneInput from "./PhoneInput";
import CNICInput from "./CNICInput";
import GenderInput from "./genderInput";
import FileInput from "./FileInput";
import TextInput from "./textInput";

import PhotoInput from "./photoInput";
var MQuestions = [
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
        stateDictKey="Name"
        key="Name"
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
        helper="Enter your CNIC: xxxxx-xxxxxxx-x"
      />,
      <PhoneInput
        stateDictKey="phone"
        key="phone"
        englishText="What is your phone number?"
        urduText="آپ کا فون نمبر کیا ہے؟"
        placeholder="+92-312-3456789"
        helper={"Enter your phone number : +92-xxx-xxxxxxx"}
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
      <FileInput
        stateDictKey="Files"
        key="Files"
        englishText="upload Important files."
        urduText="اہم فائلیں اپ لوڈ کریں۔"
        placeholder="Passign Year"
      />,
      <PhotoInput
        stateDictKey="photo"
        key="photo"
        englishText="Upload Passport size Photo."
        urduText="پاسپورٹ سائز تصویر اپ لوڈ کریں۔"
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
        helper="Enter your CNIC: xxxxx-xxxxxxx-x"
      />,
      <PhoneInput
        stateDictKey="phone"
        key="phone"
        englishText="What is your phone number?"
        urduText="آپ کا فون نمبر کیا ہے؟"
        placeholder="+92-312-3456789"
        helper={"Enter your phone number : +92-xxx-xxxxxxx"}
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

// export  MQuestions;
// export  DQuestions;

