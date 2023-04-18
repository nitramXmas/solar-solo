import './Navbar.css'
import mercury from '../../assets/images/mercury.png'
import venus from '../../assets/images/venus.png'
import mars from '../../assets/images/mars.png'
import jupiter from '../../assets/images/jupiter.png'
import saturn from '../../assets/images/saturne.png'
import uranus from '../../assets/images/uranus.png'
import neptune from '../../assets/images/neptune.png'
import pluto from '../../assets/images/pluton.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='planet-img' src={mercury} alt="" />
      <img className='planet-img' src={venus} alt="" />
      <img className='planet-img' src={mars} alt="" />
      <img className='planet-img' src={jupiter} alt="" />
      <img className='planet-img' src={saturn} alt="" />
      <img className='planet-img' src={uranus} alt="" />
      <img className='planet-img' src={neptune} alt="" />
      <img className='planet-img' src={pluto} alt="" />
    </div>
  )
}

export default Navbar