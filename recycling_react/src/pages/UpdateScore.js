import { useState } from "react";
import React from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Form.css';
import { Link } from 'react-router-dom';
import Submitted from './Submitted';

export default function UpdateScore({ currentUser }) {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [dorm, setdorm] = useState('');
  const [boxes, setboxes] = useState('');
  const [bottles, setlbottles] = useState('');
  const [cans, setcans] = useState('');
  const [points, setPoints] = useState(0);
  const { register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (validateFormData(data)) {
      try {
        const response = await fetch(`/users/${currentUser}/update_points`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            points: {points}
          }),
        });
        if (response.ok) {
          // Handle success, e.g., navigate to the submitted page
        } else {
          // Handle error, e.g., show an error message
          console.error('Failed to update user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const person = { fname, lname, dorm, boxes, bottles, cans};
    const calculatedPoints = (2*cans) + (2*bottles) * boxes; // Modify this calculation as needed
    setPoints(calculatedPoints);
    console.log(points);
  }

  // Function to validate the form data
  const validateFormData = data => {
    return true; 
  };
  
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Fill in your points:</h2>
          <span>Let us know how many green gains you've accumulated to compete for a chance at redeeming exclusive Duke prizes!</span>

          <form id='form' className='flex flex-col' onSubmit={onSubmit}>
            <input type="text" {...register("First Name")} placeholder='First Name' required value={fname} onChange={(e) => setfname(e.target.value)}/>
            <input type="text" {...register("Last Name")} placeholder='Last Name' required value={lname} onChange={(e) => setlname(e.target.value)}/>
            <input type="text" {...register("Duke Email")} placeholder='netID@duke.edu' required/>
            <select value={dorm} onChange={(e) => setdorm(e.target.value)}>
                <option selected value="" disabled>Select your Dorm</option>
                <option value="Craven">Craven</option>
                <option value="Crowell">Crowell</option>
                <option value="Edens">Edens</option>
                <option value="Hollows">Hollows</option>
                <option value="Few">Few</option>
                <option value="Keohane">Keohane</option>
                <option value="Wannamaker">Wannamaker</option>
            </select>
            <h3 className='yolo'>Tell us about your contributions</h3>
            <input type="number" {...register("Number of Boxes")} placeholder='Number of Boxes' required value={boxes} onChange={(e) => setboxes(e.target.value)}/>
            <input type="number" {...register("Number of Bottles")} placeholder='Number of Bottles' required value={bottles} onChange={(e) => setlbottles(e.target.value)}/>
            <input type="number" {...register("Number of Cans")} placeholder='Number of Cans' required value={cans} onChange={(e) => setcans(e.target.value)}/>
            <div className="submit-button">
              {/* <Link to="/submitted"> */}
                <button className='btn'>Clock it in!</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
