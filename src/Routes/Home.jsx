import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {console.log(data)}
        { loading ? 'Cargando...'
        :
        state.api === 'dog' ?
            data.message?.map((imagen, index) => <div key={index} className='card'>
                <img src={imagen}  alt='' width={200} />
                <button onClick={() => addFav(imagen)}>⭐</button>
            </div>
            )
            :
            data.map(imagen => (
                <div className='card' >
                    <img src={imagen.url} alt="" width={200}  />
                    <button onClick={() => addFav(imagen)}>⭐</button>
                </div>
            ))
        }
    </main>
  )
}

export default Home