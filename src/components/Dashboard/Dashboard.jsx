import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import NavOne from '../NavOne/NavOne'

import "./Dashboard.css";

function Dashboard() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clicked, setClicked] = useState(false);

  const boxAnimation = useSpring({
    background:
      (hoveredItem === "sorting" && clicked) || hoveredItem === "binary"
        ? "#33ff57"
        : clicked
        ? "#ff5733"
        : "#0074d9",
    transform:
      clicked || hoveredItem === "sorting" || hoveredItem === "binary"
        ? "scale(1.05)"
        : "scale(1)"
  });

  const buttonAnimation = useSpring({
    background:
      (hoveredItem === "sorting" && clicked) || hoveredItem === "binary"
        ? "#33ff57"
        : clicked || hoveredItem === "sorting"
        ? "#ff5733"
        : "#0056b3"
  });

  const titleAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(0px)"
    },
    to: async (next) => {
      await next({ opacity: 1 });
      await next({ transform: "translateX(20px)" });
      await next({ transform: "translateX(-20px)" });
      await next({ transform: "translateX(0px)" });
    },
    config: { duration: 1000 }
  });

  return (
    <div className="dashboard">
      <div className="top-menu">

        <ul>
          {/* <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li> */}
        </ul>
      </div>

      
      <h1 className="dashboard-title">◆ Algo Vision</h1>
      <div className="left-panel">
        <animated.h1 style={titleAnimation} className="slanted-text">
          <h1 className="gradient-text">◆ Welcome To Algo Vision ▶</h1>
        </animated.h1>
        <div className="items">
          {hoveredItem === "sorting" && (
            <p
              className="item"
              style={{ color: clicked ? "#33ff57" : "#FF5733" }}
            >
              <b>Path Finding Algorithm</b>
            </p>
          )}
          {hoveredItem === "binary" && (
            <p
              className="item"
              style={{ color: clicked ? "#33ff57" : "#FF5733" }}
            >
              <b>Tower of hanoi</b>
            </p>
          )}
          {hoveredItem === "array" && (
            <p
              className="item"
              style={{ color: clicked ? "#33ff57" : "#FF5733" }}
            >
              <b>N Queen problem</b>
            </p>
          )}
        </div>
      </div>
      <div className="right-panel">
        <animated.div
          className="box"
          style={boxAnimation}
          onMouseEnter={() => setHoveredItem("sorting")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setClicked(!clicked)}
        >
          <p>Path Finding Algorithm</p>
          <a href="/pathfinder">
          <animated.button className="dashboard-button" style={buttonAnimation}>
            Lets Go
          </animated.button>
          </a>
        </animated.div>

        <animated.div
          className="box"
          style={boxAnimation}
          onMouseEnter={() => setHoveredItem("binary")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setClicked(!clicked)}
        >
          <p>Tower of Hanoi</p>
          <a href="/pathfinder">
          <animated.button className="dashboard-button" style={buttonAnimation}>
            Lets Go
          </animated.button>
          </a>
        </animated.div>

        <animated.div
          className="box"
          style={boxAnimation}
          onMouseEnter={() => setHoveredItem("array")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setClicked(!clicked)}
        >
          <p>N Queen problem</p>
          <animated.button className="dashboard-button" style={buttonAnimation}>
            Lets Go
          </animated.button>
        </animated.div>
      </div>
      <div className="centered-title">

        <animated.h2 style={titleAnimation} className="white-title">
          ▶ Choose Your Vision ▶
        </animated.h2>
        
      </div>
    </div>
  );
}

export default Dashboard;
