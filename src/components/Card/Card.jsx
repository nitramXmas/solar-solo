import './Card.css'

const Card = ({object}) => {
  return (
    <div className='card'>
      <h2>{object.englishName}</h2>
      <p>{object.bodyType}</p>
      <p className='distance-text'>Shortest distance to Sun :</p>
      <p>{object.perihelion}</p>
    </div>
  )
}

export default Card