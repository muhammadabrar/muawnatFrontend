
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: 0,
  createSteps: [
    "Personal information",
    "Contact",
    "Address",
    "Education",
    "Experince",
    "Skills",
    "Langauges & Hobbies",
  ],
  createActiveStep: 0,
  err: null,
  createStep: false,
  profileData: {
    user_id: '',
    image: null,
    imageSrc: null,
    imageFile: null,
    firstName: null,
    lastName: null,
    about: null,
    data_of_birth: null,
    gender: null,
    nationality: null,
    email: null,
    phone: [],
    socailmedia: [],
    address: {
      address: null,
      address_line_2: null,
      postal_code: null,
      city: null,
      country: null,
    },
    Education: [],
    Experince: [],
    Skills: [],
    digitalSkills: [],
    comunicationSkill: null,
    languages: [],
    hobbies: [],
  },
};

export const mainSteps = createSlice({
  name: "mainSteps",
  initialState,
  reducers: {
    forwordStep: (state) => {
      if (state.active < 4) {
        state.active += 1;
      }
    },
    backwordStep: (state) => {
      if (state.active > 0) {
        state.active -= 1;
      }
    },
    createForwordStep: (state) => {
      if (state.createActiveStep < 7) {
        state.createActiveStep += 1;
      }
      if (state.createActiveStep == 6) {
        state.createStep = true;
      }
    },
    createBackwordStep: (state) => {
      if (state.createActiveStep > 0) {
        state.createActiveStep -= 1;
      }
    },
    makeError: (state) => {
      state.err = 1;
    },
    personaldata: (state, action) => {
      const data = action.payload;
      state.profileData.data_of_birth = data.dob;
      state.profileData.firstName = data.firstName;
      state.profileData.lastName = data.lastName;
      state.profileData.about = data.about;
      state.profileData.gender = data.gender;
      state.profileData.nationality = data.nationality;
      state.profileData.image = ` ${data.lastName} - ${data.imageSrc?.name}`;
      state.profileData.imageSrc= data.imageSrc;
      state.profileData.imageFile = data.imageFile;

    },
    addEmail: (state, action) => {
      const data = action.payload;
      state.profileData.email = data;
    },
    addPhone: (state, action) => {
      const data = action.payload;
      state.profileData.phone.push(`${data.type} ${data.code} ${data.phoneNo}`);
    },
    removerPhone: (state, action) => {
      const data = action.payload;
      state.profileData.phone.splice(data, 1);
    },
    addSocailMedia: (state, action) => {
      const data = action.payload;
      state.profileData.socailmedia.push({
        network_name: data.socailMedia,
        Link: data.Link,
      });
    },
    removerSocailMedia: (state, action) => {
      const data = action.payload;
      state.profileData.socailmedia.splice(data, 1);
    },
    addAddress: (state, action) => {
      const data = action.payload;
      state.profileData.address = data;
    },
    addEducation: (state, action) => {
      const data = action.payload;
      state.profileData.Education.push(data);
    },
    removerEducation: (state, action) => {
      const data = action.payload;
      state.profileData.Education.splice(data, 1);
    },
    addExperince: (state, action) => {
      const data = action.payload;
      state.profileData.Experince.push(data);
    },
    removerExperince: (state, action) => {
      const data = action.payload;
      state.profileData.Experince.splice(data, 1);
    },
    addSkills: (state, action) => {
      const data = action.payload;
      state.profileData.Skills.push(data);
    },
    removerSkills: (state, action) => {
      const data = action.payload;
      state.profileData.Skills.splice(data, 1);
    },
    addDigitalSkills: (state, action) => {
      const data = action.payload;
      state.profileData.digitalSkills.push(data);
    },
    removerDigitalSkills: (state, action) => {
      const data = action.payload;
      state.profileData.digitalSkills.splice(data, 1);
    },
    addComunicationSkill: (state, action) => {
      const data = action.payload;
      state.profileData.comunicationSkill = data;
    },
    addlanguages: (state, action) => {
      const data = action.payload;
      state.profileData.languages.push(data);
    },
    removerlanguages: (state, action) => {
      const data = action.payload;
      state.profileData.languages.splice(data, 1);
    },
    addhobbies: (state, action) => {
      const data = action.payload;
      state.profileData.hobbies.push(data);
    },
    removerhobbies: (state, action) => {
      const data = action.payload;
      state.profileData.hobbies.splice(data, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  forwordStep,
  backwordStep,
  createForwordStep,
  createBackwordStep,
  personaldata,
  addPhone,
  removerPhone,
  addSocailMedia,
  removerSocailMedia,
  addAddress,
  addEducation,
  removerEducation,
  addExperince,
  removerExperince,
  addSkills,
  removerSkills,
  removerDigitalSkills,
  addDigitalSkills,
  addComunicationSkill,
  addlanguages,
  removerlanguages,
  addhobbies,
  removerhobbies,
  addEmail
} = mainSteps.actions;

export default mainSteps.reducer;
