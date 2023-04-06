import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

 const ContextGlobal = createContext();

 export const initialState = {
  theme : {
    light:{
      id: ''
    },
    dark: {
      background: 'dark',
      navdark: 'nav-dark',
      textdark: 'texto-dark',
      botondark: 'boton-dark',
      botonmode: 'boton-mode',
      hovernav: 'hover-nav',
      textoblanco: 'texto-blanco',
      linearoja: 'linea-roja'
    }
 }}

 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const url = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])
  const [theme, setTheme] = useState(initialState.theme.light)
    
  const changeTheme = () => {
    theme === initialState.theme.light ? setTheme(initialState.theme.dark): setTheme(initialState.theme.light)
  }

  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  

  return (
    <ContextGlobal.Provider 
      value = { {data, favorites, setFavorites, theme, changeTheme} }>
      {children}
    </ContextGlobal.Provider>
  )
}


export default ContextProvider;

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}
