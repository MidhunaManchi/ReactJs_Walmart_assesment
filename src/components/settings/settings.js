import { React, useContext, useEffect, useState} from 'react';
import Nav from '../Nav/nav';
import {FnameContext, LnameContext} from '../contextFile/contextFile';
import './style.css';


function Settings(){

    const stgmsg = 'This is the "Settings" Page'; 
    const {firstName,setFirstName} = useContext(FnameContext);
    const {lastName,setLastName} = useContext(LnameContext);
    const firstname = useFormInput('firstname',firstName);
    const lastname = useFormInput('lastname',lastName);
   
    
useEffect(()=>{
    setFirstName(firstname.value);
    setLastName(lastname.value);
},[]);

    return(
        <div className="row">
            <Nav/>
            <main>
            <div className='formData'>
                
                <form>
                    <div className='labelData'>
                    <p>{stgmsg}</p>
                    <label htmlFor="firstname">Firstname </label>
                    <input type="text" {...firstname} placeholder={firstname.value} />
                    <br/>
                    <br/>
                    <label htmlFor="lastname">Lastname </label>
                    <input type="text" {...lastname} placeholder={lastname.value} />
                    </div>
                    <br/><br/>
                    <button type="button" onClick={()=> {setFirstName(firstname.value); setLastName(lastname.value)}}> Update </button>
                </form>
                </div>
            </main>
        </div>
    )   
}

const useFormInput = (fieldName, initialValue) => {
    const [value, setValue] = useState({"fieldName":fieldName, "value":initialValue});
  
    const handleChange = e => {
      var new_value = {"fieldName":value.fieldName, "value": e.target.value};
      setValue(new_value);
      console.log(JSON.stringify(new_value));
    }
    return {
      value: value.value,
      onChange: handleChange
    }
}  

export default Settings;