import { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
import Header from './components/Header';
import Tasklist from "./components/TaskList"

function App() {
  const [addedTask, setAddedTask] = useState([])

  const getData = async () => {
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/tasks"
    try {
      const {data} = await axios(BASE_URL)
      setAddedTask(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className='container bg-danger rounded p-4 mt-5' style={{maxWidth: "640px"}}>
      <Header getData={getData} />
      {addedTask.map((item, index)=>(
        <Tasklist item={item} key={index} getData={getData} />
      ))}
    </div>
  )
}

export default App;
