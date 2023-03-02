import { useState } from "react"
import AddTask from "./AddTask"


const Button = ({getData}) => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button className="btn btn-warning d-flex mx-auto mb-4" onClick={()=>setShow(!show)}>
        {show ? "Hide Add Task Bar" : "Show Add Task Bar"}
      </button>
      {show && <AddTask getData={getData} /> }
    </div>
  )
}

export default Button