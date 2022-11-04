import React, { useRef } from "react";
import styles from "../../../styles/cvReveiw.module.css";

import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

import { Button, Divider } from "@mui/material";
import img from "../../../public/cover.jpg";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Container } from "@mui/system";
import {
  forwordStep,
  backwordStep,
} from "../../../stores/slices/profileCreation";
import axios from "axios";

const Template = () => {
  const data = useSelector((state) => state.mainSteps.profileData);
  const createStep = useSelector((state) => state.mainSteps.createStep);
  const compRef = useRef();
  const dispatch = useDispatch();

  const saveCv = () => {
    // const file  = new File(data.pp, 'new name')

    const formData = new FormData();
    if (data.imageSrc) {
      formData.append("file", data.imageSrc, data.image);
    }
    formData.append("data", JSON.stringify(data));

    axios.post("http://localhost:8000/cv", formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <Container>
      <div className={styles.cv} ref={compRef}>
        <div className={styles.row}>
          <div className={styles.left}>PERSONAL INFORMATION</div>
          <div className={styles.right}>
            {data.firstName} {data.lastName}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div>
              {data.imageFile && (
                <img
                  style={{ border: "1px black solid" }}
                  src={data.imageFile}
                  width={"100"}
                  height={"120"}
                  layout="intrinsic"
                />
              )}
            </div>
          </div>
          <div className={styles.right}>
            {data.address.CurrentAddress && (
              <div className={styles.row2}>
                <i className={styles.icon}>
                  <FmdGoodIcon />{" "}
                </i>
                <p>
                  {data.address.CurrentAddress}, {data.address.city},{" "}
                  {data.address.postalCode}, {data.address.country}{" "}
                </p>
              </div>
            )}
            {data.address.addressLine2 && (
              <div className={styles.row2}>
                <i className={styles.icon}>
                  <FmdGoodIcon />{" "}
                </i>
                <p>{data.address.addressLine2}</p>
              </div>
            )}
            {data.phone.length > 0 && (
              <div className={styles.row2}>
                <i className={styles.icon}>
                  <PhoneAndroidIcon />{" "}
                </i>
                <p>
                  {data.phone?.map((phone, i) => (
                    <span key={i}>
                      {phone.type}: {phone.code} {phone.phoneNo}
                    </span>
                  ))}
                </p>
              </div>
            )}
            {data.email && (
              <div className={styles.row2}>
                <i className={styles.icon}>
                  <AddIcon />{" "}
                </i>
                <p>{data.email} </p>
              </div>
            )}
            {data.socailmedia?.map((media, i) => (
              <div key={i} className={styles.row2}>
                <i className={styles.icon}>
                  <LanguageIcon />{" "}
                </i>
                <p>
                  {media.socailMedia}: {media.Link}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p>{data.about}</p>

        {data.Experince.length > 0 && (
          <div className={styles.row} style={{ alignItems: "center" }}>
            <div className={styles.left}>WORK EXPERIENCE</div>
            <div className={styles.right}>
              <Divider className={styles.line} />
            </div>
          </div>
        )}
        {data.Experince?.map((Experince, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.left}>
              {String(Experince.startingDate).slice(4, 16)} -{" "}
              {String(Experince.endDate).slice(4, 16)}
            </div>
            <div className={styles.right}>
              <p className={styles.color}> {Experince.role}</p>
              <p>{Experince.company} - Topi</p>
              <p>{Experince.Detail}</p>
            </div>
          </div>
        ))}
        {data.Education.length > 0 && (
          <div className={styles.row} style={{ alignItems: "center" }}>
            <div className={styles.left}>Education</div>
            <div className={styles.right}>
              <Divider className={styles.line} />
            </div>
          </div>
        )}
        {data.Education?.map((Education, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.left}>
              {String(Education.startDate).slice(4, 16)} -{" "}
              {Education.Underprogress
                ? "Under progress"
                : String(Education.endDate).slice(4, 16)}
            </div>
            <div className={styles.right}>
              <p className={styles.color}>
                {" "}
                {Education.degree} in {Education.field}
              </p>
              <p>{Education.organization} - Topi</p>
            </div>
          </div>
        ))}

        {(data.Skills.length > 0) |
          (data.digitalSkills.length > 0) |
          (data.languages.length > 0) |
          (data.hobbies.length > 0) |
          data.comunicationSkill && (
          <div className={styles.row} style={{ alignItems: "center" }}>
            <div className={styles.left}>PERSONAL SKILLS</div>
            <div className={styles.right}>
              <Divider className={styles.line} />
            </div>
          </div>
        )}
        {data.Skills.length > 0 && (
          <div className={styles.row}>
            <div className={styles.left}>Skills</div>
            <div className={styles.right}>
              {data.Skills?.map((Skill, i) => (
                <p key={i}>{Skill}</p>
              ))}
            </div>
          </div>
        )}
        {data.digitalSkills.length > 0 && (
          <div className={styles.row}>
            <div className={styles.left}>Digital Skills</div>
            <div className={styles.right}>
              {data.digitalSkills?.map((digitalSkill, i) => (
                <p key={i}>{digitalSkill}</p>
              ))}
            </div>
          </div>
        )}
        {data.languages.length > 0 && (
          <div className={styles.row}>
            <div className={styles.left}>Languages</div>
            <div className={styles.right}>
              {data.languages?.map((language, i) => (
                <p key={i}>{language}</p>
              ))}
            </div>
          </div>
        )}
        {data.comunicationSkill && (
          <div className={styles.row}>
            <div className={styles.left}>Comunication Skill</div>
            <div className={styles.right}>
              <p>{data.comunicationSkill}</p>
            </div>
          </div>
        )}
        {data.hobbies.length > 0 && (
          <div className={styles.row}>
            <div className={styles.left}>Lobbies</div>
            <div className={styles.right}>
              {data.hobbies?.map((hobbies, i) => (
                <p key={i}>{hobbies}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      <Divider sx={{ margin: "1rem 0" }} />

      <div className={styles.mainStesActions}>
        <Button onClick={() => dispatch(backwordStep())}>Back</Button>
        <div>
          <Button onClick={() => saveCv()}>Save</Button>

          <ReactToPrint
            trigger={() => (
              <Button variant="contained">Download / Print</Button>
            )}
            content={() => compRef.current}
          />
        </div>
      </div>
    </Container>
  );
};

export default Template;
