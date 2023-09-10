
import React from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Form.css';
import { Link } from 'react-router-dom';
import Submitted from './Submitted';

export default function UpdateScore() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // You can add your validation logic here if needed.
    // For example, check if all required fields are filled.
    if (validateFormData(data)) {
      console.log(data);
      // Navigate to the submitted page
    }
  };

  // Function to validate the form data
  const validateFormData = data => {
    // Implement your validation logic here
    // For example, check if all required fields are filled
    if (!data['First Name'] || !data['Last Name'] || !data['Duke Email'] || !data['Number of Boxes'] || !data['Number of Bottles'] || !data['Number of Cans']) {
      // Display an error message or handle the validation failure as needed
      alert('Please fill in all required fields.');
      return false;
    }
    // Add more validation rules if necessary

    return true; // All validations passed
  };
  
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Fill in your points:</h2>
          <span>Let us know how many green gains you've accumulated to compete for a chance at redeeming exclusive Duke prizes!</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("First Name")} placeholder='First Name' required/>
            <input type="text" {...register("Last Name")} placeholder='Last Name' required/>
            <input type="text" {...register("Duke Email")} placeholder='netID@duke.edu' required/>
            <select>
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
            <input type="number" {...register("Number of Boxes")} placeholder='Number of Boxes' required/>
            <input type="number" {...register("Number of Bottles")} placeholder='Number of Bottles' required/>
            <input type="number" {...register("Number of Cans")} placeholder='Number of Cans' required/>
            <div className="submit-button">
              <Link to="/submitted">
                <button className='btn'>Clock it in!</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
