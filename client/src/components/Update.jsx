import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Update({id}) {
    
    const [update, setUpdate] = useState(false)
    const [name, setName] = useState('')

    const UpdateAbility = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/abilities/${id}`, { name })
        window.location.reload(true)
    }

  return (
    <div>
        {update?  
        
        <form onSubmit={(e)=>UpdateAbility(e)}>
            <input name='Ability' type='text' placeholder='Change Ability name' onChange={(e)=>setName(e.target.value)} ></input>
            <button className="search-button" type='submit'>Submit</button>
        </form> : 
        
        <button className='delete-button' onClick={() => setUpdate(true)}>Update</button>}

    </div>
  )
}

export default Update