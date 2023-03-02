import axios from "axios";
import { BsTrashFill } from "react-icons/bs";

const TaskList = ({ item, getData }) => {
  const {id, date, task} = item

  const deleteTask = async (id) => {
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/tasks"
    try {
      await axios.delete (`${BASE_URL}/${id}`)
    } catch (error) {
      console.log(error);
    }
    getData()
  }

  return (
    <div className="mt-4 border rounded mx-auto bg-light" style={{maxWidth: "510px"}}>
      <ul className="list-unstyled px-3 mt-2">
        <li className="d-flex justify-content-between">
          <h6>{date}</h6>
          <BsTrashFill role="button" id={id} onClick={()=>deleteTask(id)} />
        </li>
        <li>
          <p>{task}</p>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
