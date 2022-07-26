import React, { useState } from 'react'

const Form = ({newLocation}) => {
 const [city,setCity] = useState('');


    const onSubmit=(e)=>{
        e.preventDefault();
        console.log({city});
        if(city===""||!city) return;

        console.log('hola');
        newLocation(city);

    }

  return (
    <div>
        <form  onSubmit={onSubmit}>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit">Ciudad</button>
        </form>
    </div>
  )
}

export default Form