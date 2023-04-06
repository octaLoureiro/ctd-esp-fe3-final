import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme, changeTheme} = useGlobalStates()
  return (
    
    <div>
      <h2 id={theme.textoblanco}>Want to know more?</h2>
      <p id={theme.textoblanco}>Send us your questions and we will contact you</p>
      <Form/>
    </div>

    
  )
}

export default Contact