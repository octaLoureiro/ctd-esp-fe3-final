import React from 'react'
import { useParams } from 'react-router-dom'

import { useGlobalStates } from '../Components/utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const id = parseInt(params.id)
  //console.log(params)
  const {data} = useGlobalStates()

  
  const card = data.find(item => item.id === id)

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{card.name}</td>
          <td>{card.email}</td>
          <td>{card.phone}</td>
          <td>{card.website}</td>
        </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail