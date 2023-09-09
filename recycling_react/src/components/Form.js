import React from 'react'
import { useForm } from 'react-hook-form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/Form.css'
export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
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
                    <DropdownButton id="dropdown-basic-button" title="Select Dorm..">
                        <Dropdown.Item href="#/action-1">Few</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Crowell</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Craven</Dropdown.Item>
                    </DropdownButton>
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            {/* <div className="col-2">
                <img src={logo} alt="" />
            </div> */}
        </div>
    </section>
  )
}