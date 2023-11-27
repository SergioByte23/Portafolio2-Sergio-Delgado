import './styles/Nav.css'

const Nav = () => {
  return (
    <>
    <div className='nav__div' >
    <span className='nav__subtitle'>SERGIO DELGADO</span> 
    <span className='nav__letter'>S</span>
    </div>
    <ul className="nav__ul" id="box-menu">
      <li><a className="nav__ul__a" href="#root">ABOUT</a></li>
      <li><a className="nav__ul__a" href="#portfolio">PROJECTS</a></li>
      <li><a className="nav__ul__a" href="#contact">CONTACT</a></li>
    </ul>
    </>
  )
}

export default Nav