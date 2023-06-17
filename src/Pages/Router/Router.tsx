import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "../AboutMe";
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
  AboutMe = "/aboutme",
}

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
          <Route path={PathNames.AboutMe} element={<AboutMe></AboutMe>}></Route>
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
