import React, { useState, useRef, useEffect } from 'react';
import '../styles/Submitted.css'

function Submitted() {
  let points = +document.getElementById("boxes").value + 2*+document.getElementById("cans").value + 2*+document.getElementById("cans").value;


  return (
    <div className="submitted"> 
      <h1> Congragulations, you now have 10 points!</h1>
      <p> Thanks for helping make the planet a better place! </p>
    </div>
  )
}

export default Submitted