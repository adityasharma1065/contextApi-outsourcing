import { useContext } from "react";
import { dataContext } from "../context/Datacontext";


const Top = () => {

    const a=useContext(dataContext)
    console.log(a);
    
  return (
    <div>Top comp</div>
  )
}

export default Top