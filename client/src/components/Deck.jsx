import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const DeckForm = (props) => {
  let navigate = useNavigate()

    const url = 'http://localhost:3001/api/abilities/add-new'
    const [data, setData] = useState({
      name: '',
      image: '',
      released: '',
    })

    function submit (e) {
      axios.post(url, {
        name: data.name,
        image: data.image,
        description: data.description
      })
      .then(res => {
        console.log(res.data)
        navigate('/abilities')
      })
    }

      function onChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
      }

  return (
    <div>
      <h1>CREATE YOUR CARD!</h1>
      <form onSubmit={ submit }>
        <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
        <input type="text" id={'image'} name={'image'} placeholder={'Card image'} onChange={(e) => onChange(e)}/>
        <input type="description" id={'description'} name={'description'} placeholder={'Description'} onChange={(e) => onChange(e)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DeckForm