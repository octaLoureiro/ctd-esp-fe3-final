import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(apiSwitch, initialState)
    
    useEffect(() => {
        axios(state.url)
        .then(res => setData(res.data))
    }, [state])


  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
