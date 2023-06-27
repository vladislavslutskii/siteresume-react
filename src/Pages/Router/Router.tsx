import React from "react";
import ShowInfo from "../../Components/ShowInfo";
import Aboutme from "../AboutMe/Aboutme";
import Contact from "../Contact";
import PagesWrapper from "../PagesWrapper";
import Projects from "../Projects";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export enum PathNames {
  Home = `/`,
  LinkedIn = "https://goo.su/wGS5IV",
  Instagram = "https://goo.su/u6kSl8L",
  Github = "https://goo.su/bz3XoG",
  Projects = "/projects",
  ContactMe = "/contactme",
  AboutMe = "/aboutme/bio",
  Interests = "/aboutme/interests",
  Education = "/aboutme/education",
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
                <ShowInfo data={cards[0]}></ShowInfo>
              </Aboutme>
            }
          ></Route>
          <Route
            path={PathNames.Interests}
            element={
              <Aboutme>
                <ShowInfo data={cards[1]}></ShowInfo>
              </Aboutme>
            }
          ></Route>
          <Route
            path={PathNames.Education}
            element={
              <Aboutme>
                <ShowInfo data={cards[2]}></ShowInfo>
              </Aboutme>
            }
          ></Route>
        </Route>
        <Route
          path={`*`}
          element={<Navigate to={PathNames.Home}></Navigate>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
