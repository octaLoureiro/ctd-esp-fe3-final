import React from 'react'
import { useGlobalStates } from './utils/Context'

const Footer = () => {
  const {theme, changeTheme} = useGlobalStates()
  return (
    <footer id={theme.background}>
      <div className='p-footer' id={theme.linearoja}><p>Volver al inicio</p></div>
     

     <div className='logos'> 

       <a href="https://www.digitalhouse.com/co"><img src="./images/DH.png" alt='DH-logo' className='logo_dh'/></a>

         <div >
           <a href="https://es-la.facebook.com/digitalhouseschool/" className='links-app'><img src="./images/ico-facebook.png" alt="logo-face" className='logos-apps' /></a>
           <a href="https://www.instagram.com/_digitalhouse/" className='links-app'><img src="./images/ico-instagram.png" alt="logo-instagram" className='logos-apps' /></a>
           <a href="https://www.tiktok.com/es/" className='links-app'><img src="./images/ico-tiktok.png" alt="logo-tiktok" className='logos-apps' /></a>
           <a href="https://web.whatsapp.com/" className='links-app'><img src="./images/ico-whatsapp.png" alt="logo-whatsapp" className='logos-apps' /></a>
         </div>  

       </div>
      

    </footer>
  )
}

export default Footer
