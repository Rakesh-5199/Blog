import React from 'react';
import MainCard from './card';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const All = () => {
  return (
    <div className='home'>

      <Link to="/cyber-security">

        <MainCard
          Name={"Cyber Security"}
          title={"How to Render an Array of Objects in React? [in 3 easy steps]"}
          imgsrc={"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png"}
        />
      </Link>

      <Link to="/data-science">

        <MainCard
          Name={"Data Science"}
          title={"12 Real-World Data Science Examples: Power Of Data Science"}
          imgsrc={"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp"}
        />

      </Link>


      <Link to="/full-stack-development">
        <MainCard
          Name={"Full Stack"}
          title={"Best Full-Stack Development Project Ideas in 2024"}
          imgsrc={"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"}
        />
      </Link>

    </div>

  );
};

export default All;

