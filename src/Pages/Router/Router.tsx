import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bio from "../../Components/Bio";

import Aboutme from "../AboutMe/Aboutme";
import Contact from "../Contact";
import PagesWrapper from "../PagesWrapper";
import Projects from "../Projects";

export enum PathNames {
  Home = `/`,
  LinkedIn = "https://goo.su/wGS5IV",
  Instagram = "https://goo.su/u6kSl8L",
  Github = "https://goo.su/bz3XoG",
  Projects = "/projects",
  ContactMe = "/contactme",
  AboutMe = "/aboutme/bio",
  // bio = "/aboutme/bio",
  interests = "/aboutme/interests",
  education = "/aboutme/education",
}
const cards = [
  { name: "bio", helloText: "Test1", text: "Test1" },
  { name: "interest", helloText: "Test2", text: "Test2" },
  { name: "education", helloText: "Test3", text: "Test3" },
];
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper></PagesWrapper>}>
          <Route
            path={PathNames.Projects}
            element={<Projects></Projects>}
          ></Route>
          <Route
            path={PathNames.ContactMe}
            element={<Contact></Contact>}
          ></Route>
          <Route
            path={PathNames.AboutMe}
            element={
              <Aboutme>
                <Bio list={cards[0]}></Bio>
              </Aboutme>
            }
          ></Route>
          <Route
            path={PathNames.interests}
            element={
              <Aboutme>
                <Bio list={cards[1]}></Bio>
              </Aboutme>
            }
          ></Route>
          <Route
            path={PathNames.education}
            element={
              <Aboutme>
                <Bio list={cards[2]}></Bio>
              </Aboutme>
            }
          ></Route>
          {/* <Route path={PathNames.AboutMe} element={<AboutMe></AboutMe>}></Route> */}
        </Route>
        <Route
          path={`*`}
          element={<Navigate to={PathNames.Home}></Navigate>} // navigate делает редирект
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
