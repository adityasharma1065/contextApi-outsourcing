import { createContext } from "react"



export const dataContext=createContext(null)
const Datacontext = (props) => {

  return (
      <dataContext.Provider value={"hello"}>
        {props.children}
        </dataContext.Provider>
  )
}

export default Datacontext