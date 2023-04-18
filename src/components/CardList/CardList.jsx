import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import './CardList.css'

const CardList = () => {

  const [planets, setPlanets] = useState([]);

  useEffect(()=>{
    axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
    .then((res)=>setPlanets(res.data.bodies))
  },[])

  const sortByDistance = () => {

  }

  return (
    <div className='planets'>
      {
        planets &&
        planets.filter((obj)=>(obj.isPlanet===true)).map((obj)=>(
          <Card key={obj.id} object={obj} />
        ))
      }
    </div>
  )
}

export default CardList