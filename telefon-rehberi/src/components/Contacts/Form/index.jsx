import React from 'react'
import {useState ,useEffect} from 'react';
import '../style.css';
const initialFormValues ={fullname :"", phone_number :""};
function Form({addContact , contacts}) {
    const [form,setForm] = useState(initialFormValues);

    useEffect(()=>{
        setForm(initialFormValues);   
    },[contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        if(form.fullname ==="" || form.phone_number ===""){

            alert("Alanları doldurunuz...");
            return false;
        }
        addContact([...contacts, form]) 
        
    };

  return (
  <form onSubmit={onSubmit}>
        <div>
            <input 
            name="fullname" 
            placeholder='Fullname' 
            onChange={onChangeInput} 
            id="" 
            value={form.fullname}
           
            />
        </div>
        <div>
            <input name="phone_number" 
            placeholder='Phone Number' 
            onChange={onChangeInput} id="" 
            value={form.phone_number}
            />
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>
  </form>
  )
}

export default Form