import React from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Form.css';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Fill in your points</h2>
          <span>Let us know how much green gains you accumulated and compete for a chance at some Exclusive Duke Prizes</span>

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
            <button className='btn'>Clock them in!</button>
          </form>
        </div>
      </div>
    </section>
  );
}

