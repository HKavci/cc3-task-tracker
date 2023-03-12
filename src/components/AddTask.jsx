import axios from "axios"
import { useState } from "react"

const AddTask = ({getData}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {date: new Date(date).toLocaleString(), task}
    postTask(newTask)
    setTask("")
    setDate("")
  }

  const postTask = async (newTask) => {
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/tasks"
    try {
      await axios.post (BASE_URL, newTask)
    } catch (error) {
      console.log(error);
    }
    getData()
  }

  

  return (
      <form className="container" onSubmit={handleSubmit} style={{maxWidth: "540px"}}>
        <div className="mb-3">
          <label htmlFor="inputTask" className="form-label">Task</label>
          <input type="text" className="form-control" id="inputTask" value={task} onChange={(e)=>setTask(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDate" className="form-label">Date & Time</label>
          <input type="datetime-local" className="form-control" id="inputDate" value={date} onChange={(e)=>setDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-warning d-flex mx-auto" disabled={!task.trim()}>Add Task</button>
      </form>
  )
}

export default AddTask