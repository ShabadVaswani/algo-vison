import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import NavOne from '../NavOne/NavOne'

import "./Dashboard.css";

function Dash() {



  

  return (
    <div>
  <header>
    <h1>Tower of Hanoi Puzzle</h1>
  </header>
  <controls-container>
    <section className="controls">
      <div className="control-module">
        <p className="item-number-container">
          Item Count: <span className="item-number">5</span>
        </p>
        <div className="slider-container">
          <input type="range" className="item-counter" max={6} min={1} defaultValue={5} />
        </div>
      </div>
      <div className="control-module">
        <p>Generate Tower:</p>
        <button className="generate-button"><i className="fas fa-sync" /></button>
      </div>
      <div className="control-module">
        <p>Simulate:</p>
        <button className="play-button"><i className="fas fa-play" /></button>
      </div>
    </section>
  </controls-container>
  <screen-container>
    <section className="screen" />
  </screen-container>
  <footer>
  </footer>
</div>
  );
}

export default Dashboard;
