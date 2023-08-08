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
  {
    name: "bio",
    helloText: "My bio",
    text: "Hi, my name is Vladislav Slutsky, and I was born in Belarus in the city of Grodno. My parents are wonderful and supportive people who have always put their children's development first.\n\nMy childhood was spent in the fabulous city of Grodno, it is very beautiful and has a great history, that's where I got my first education at High School No. 3 named after V.M. Usov. After graduation, I entered Ivan Schastny Grodno State Electrotechnical College, where I chose a direction in the field of electrics. University years were a period of active search and self-discovery for me. During my studies, I actively participated in student life, became a part of various student clubs.\n\nIn addition to work and study, my interests also include includes macro photography and photography and sports.I always try to diversify my life and continue to develop myself.\n\nIn life, it is important for me: family, friendship, kindness, honesty, diversity, self-development and others. I always try to live according to my principles and benefit others.\n\nAt the moment, I am striving to study programming, or to be more precise, Front End development. I believe that my efforts and efforts will lead me to success and allow me to contribute to society.\n\nMy life is full and exciting, and I am glad for all the opportunities and challenges that I have experienced. I am ready for new challenges and I am sure that the future will bring even more interesting moments and achievements.",
  },
  {
    name: "interest",
    helloText: `Me outside  work`,
    text: `In my free time I like to  take pictures. My favorite thing to do is to take macro pictures of nature. This hobby inspires me to create something new and creative. Sports are an integral part of my life. I like sports in nature very much, so sometimes I go for a run in the park near my home.\n\nAlso in my spare time I like to listen to podcasts on self-development. They motivate me every day to improve my skills.\n\nMostly I spend my free time working on my projects, adding to my knowledge in programming and human health.`,
  },
  {
    name: "education",
    helloText: "Education Details",
    text: "Programming courses from TeachMeSkills IT school\nFront End Developer 2022 - 2023\n\nIvan Schastny Grodno State Electrotechnical College\n2016 - 2019\n\nHigh School № 3 named after V.M. Usov\n2007 - 2016",
  },
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
