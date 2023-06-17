import React, { useEffect, useState } from "react";

import styles from "./Contact.module.scss";
import { Cross, Github, Mail, Phone } from "../../Assets/Icons";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import SubMenu from "../../Components/SubMenu";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const cards = [
  {
    id: 1,
    text: "user@gmail.com",
    icon: <Mail width={22} height={22}></Mail>,
  },
  {
    id: 2,
    text: "+375292688528",
    icon: <Phone width={22} height={22}></Phone>,
  },
];

const Contact = ({}) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError("Set correct email");
    } else {
      setEmailError("");
    }
  }, [emailTouched, email]);

  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const getHeight1 = document.documentElement.clientHeight - 112;
  const [Height, setHeight] = useState(getHeight1);

  window.addEventListener(
    `unload`,
    (event) => {
      const getHeight = document.documentElement.clientHeight - 112;
      console.log(getHeight);
      setHeight(getHeight);
    },
    false
  );

  const divStyle = { height: Height };
  return (
    <div style={divStyle} className={styles.contactMe}>
      <div className={styles.contactMe_menu}>
        <SubMenu
          onClick={() => setOpenMenu(!openMenu)}
          openMenu={openMenu}
          label={"contacts"}
          menuList={cards}
        ></SubMenu>
      </div>
      <div className={styles.contactMe_info}>
        <div className={styles.contactMe_info_tabs}>
          <div className={styles.contactMe_info_tab}>
            contacts
            <Cross width={12} height={12}></Cross>
          </div>
        </div>
        <div className={styles.contactMe_info_formACode}>
          <div className={styles.contactMe_info_form}>
            <div className={styles.formContainer}>
              <div className={styles.formContainer__inputContainer}>
                <Label title={"_name"} />
                <Input
                  value={name}
                  onChange={setName}
                  placeholder={"Your name"}
                  className={styles.formContainer__inputContainer__nameInput}
                />
              </div>
              <div className={styles.formContainer__inputContainer}>
                <Label title={"_email"} />
                <Input
                  value={email}
                  onChange={setEmail}
                  placeholder={"Your email"}
                  onBlur={onBlurEmail}
                  error={!!emailError}
                  className={styles.formContainer__inputContainer__emailInput}
                />
              </div>
              <div className={styles.formContainer__inputContainer}>
                <Label title={"_message"} />
                <Input
                  type={"textarea"}
                  value={onmessage}
                  onChange={setMessage}
                  placeholder={"Your message"}
                  className={styles.formContainer__inputContainer__messageInput}
                />
              </div>

              <div className={styles.formContainer__buttonContainer}>
                <a className={styles.formContainer__buttonContainer_button}>
                  submit-message
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactMe_info_code}>
            <div className={styles.contactMe_info_codeWrap}>
              <div className={styles.contactMe_info_codeWrap_number}>
                1 2 3 4 5 6 7 8 9 10 11
              </div>
              <div className={styles.contactMe_info_codeWrap_text}>
                <span>
                  <span className={styles.pink}>const </span> button
                  <span className={styles.pink}> = </span>
                  document.querySelector(
                  <span className={styles.orange}>#sentBtn</span>);
                </span>
                <br></br> <br></br>
                <span>
                  <span className={styles.pink}>const</span> message
                  <span className={styles.pink}> = </span>
                </span>
                <span>&#123;</span>
                <br></br>
                <span className={styles.item}>
                  name:
                  <span className={styles.orange}>{name}</span>
                </span>
                <br></br>
                <span className={styles.item}>
                  email: <span className={styles.orange}>{email || ""}</span>
                </span>
                <br></br>
                <span className={styles.item}>
                  message:
                  <span className={styles.orange}>{message || ""}</span>
                </span>
                <br></br>
                <span>&#125;</span>
                <br></br> <br></br>
                <span>
                  button.addEventListener
                  <span>
                    <span className={styles.symbol}> &#40;</span>
                    <span className={styles.orange2}>`click`, </span>
                    <span className={styles.symbol}>()</span>
                    <span className={styles.symbol}>
                      <span className={styles.pink}> =&#62;</span> &#123;
                    </span>
                  </span>
                  <br></br>
                  <span className={styles.item}>form.send(message);</span>
                  <br></br>
                  <span className={styles.symbol}>&#125;&#41;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
