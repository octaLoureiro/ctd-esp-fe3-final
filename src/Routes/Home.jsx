import React from 'react'
import Card from '../Components/Card'
import {useGlobalStates} from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { data, theme } = useGlobalStates()

  return (
    <main id={theme.background} >
      <h1 >Home</h1>
      <div className='card-grid'>
        
        {data.map(info => (<Card key = {info.id} id = {info.id} name = {info.name} username = {info.username}/> ))}
      </div>
    </main>
  )
}

export default Home