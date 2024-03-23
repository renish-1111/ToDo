import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {

    setTodos([...todos, { id: uuidv4(), todo, isComplete: false }])
    setTodo("");
  };

  const handleEdit = (e,id) => {
    let t = todos.filter(i => i.id === id)
    
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
      });
      setTodos (newTodos) 
  };

  const handleDelete = (e,id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
      });
      setTodos (newTodos) 
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    console.log(` The id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index)

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos, todos)
}

return (
  <>
    <Navbar />
    
    <div className="container mx-auto pb-5">
      {/* box */}
      <div className="box bg-purple-300 p-5 rounded-xl min-h-[80dvh]">
        {/* addTodo */}
        <div className="addToDo my-5">
          <div className=" text-lg font-bold ">Add ToDo</div>
          <input onChange={handleChange} value={todo} className="w-2/5" type="text" placeholder="Enter your ToDo" />
          <button onClick={handleAdd} className="bg-purple-800 hover:bg-purple-950 text-white p-2 px-5 rounded-lg mx-5 text-sm">Add</button>
        </div>
        <div className="text-lg font-bold">Your ToDo</div>
        {todos.length === 0 ? <div  className="flex justify-center mt-5 text-3xl font-bold">Todo list is empty</div> : null}
        <div className="todos">
          {todos.map(item => {
            return <div key={item.id} className="todo flex justify-between items-center my-3">

              <div className={` ${item.isCompleted ? "line-through" : ""} text-xl font-medium flex items-center gap-16`}>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} className="w-6 h-6" />
                <div className="max-w-[65vw] flex-wrap break-word">{item.todo}</div>
              </div>
              <div className="button flex gap-2 ">
                <button onClick={(e)=>handleEdit(e,item.id)} className="bg-purple-800 hover:bg-purple-950 text-white py-2 px-3 rounded-lg text-sm">Edit</button>
                <button  onClick={(e)=>handleDelete(e,item.id)} className="bg-purple-800 hover:bg-purple-950 text-white py-2 px-3 rounded-lg mx-2 text-sm">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
);
}

export default App;
