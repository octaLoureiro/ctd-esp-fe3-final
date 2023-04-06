import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme} = useGlobalStates()
  const clase = `${theme.navdark} ${theme.background}`
  console.log(theme)
  return (
    <nav className={clase}>
      <div className='flex-dh'>
        <span className='rojo'>D</span> <p className='p_nav'>H Odonto</p>
     </div>
      <div>
      <Link to={"/"} className="linkNav" id={theme.hovernav}>Home</Link>
      <Link to={"/Contact"} className="linkNav"id={theme.hovernav}>Contact</Link>
      <Link to={"/Favs"} className="linkNav"id={theme.hovernav}>Favs</Link>
      
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='darkmode' id={theme.botonmode} onClick={changeTheme}>{theme.botonmode ? '🌞' : '🌚'}</button>
      </div >
    </nav>
  )
}

export default Navbar