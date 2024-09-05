import { useState } from 'react'
import './App.css';
import { Button } from 'antd';
import { GrUpdate } from "react-icons/gr";
import { DeleteFilled, EditFilled} from '@ant-design/icons';


function App() {
  let [inpText, setInpText] = useState("");
  let [todos, setTodos] = useState([]);

  let addTodo = () => {
      setTodos([...todos, {inpText}]);
      setInpText("");
  }
  let handleInp = (e) => {
    setInpText(e.target.value);
  }

  // delete 
  let delFunc = (id) => {
    let oldTodos = [...todos];
    oldTodos.splice(id, 1);
    setTodos(oldTodos);
  }

  // edit
  let editFunc = (id) => {
    let a = todos[id];
    setInpText(a.inpText);
  }
  let updFunc = (id) => {
      let oldTodos = [...todos];
      oldTodos.splice(id, 1, {inpText});
      setTodos(oldTodos);
      setInpText("");
  }

  return (
    <>
      
      <div className='cardContainer'>
      <h1>ToDo List</h1>
        <input onChange={handleInp} value={inpText} className='inpField' type="text" />
        <Button onClick={addTodo} className='btn' type="primary"> Add </Button>
        <ul>
          {
            todos.map((val, ind) => {
              return <li key={ind} className='Lists'><div>{val.inpText}</div>  <div><DeleteFilled style={{margin: "0 5px"}} onClick={() => delFunc(ind)} /> 
              {inpText != "" ? <GrUpdate style={{margin: "5px"}} onClick={() => updFunc(ind)} /> : <EditFilled style={{margin: "0 5px"}} onClick={() => editFunc(ind)}/>}  </div> </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
