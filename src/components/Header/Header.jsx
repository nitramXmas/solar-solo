import logo from '../../assets/images/logo-apollo-blc.png'
import info from '../../assets/images/information-button.png'
import Clock from '../Clock/Clock'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img className='header-image' src={logo} alt="" />
      <Clock />
      <img className='header-image' id='info-img' src={info} alt="" />
    </div>
  )
}

export default Header