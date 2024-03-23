import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
    if (!showFinished) {
      setshowFinished(true)
    } else {
      setshowFinished(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    if (!showFinished) {
      setshowFinished(true)
    } else {
      setshowFinished(false)
    }
  }




  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }



  return (
    <>
      <Navbar />

      <div className="container mx-auto pb-5">
        {/* box */}
        <div className="box break-word bg-purple-300 p-5 rounded-xl min-h-[80dvh]">
          <div className="text-3xl font-bold text-center mb-6">Task Manager</div>
          {/* addTodo */}
          <div className=" text-2xl font-bold md:ml-3">Add ToDo</div>
          <div className="addToDo   justify-center items-center">
            <div className="flex justify-center">
              <input onChange={handleChange} value={todo} className="w-full h-10 block text-center m-3" type="text" placeholder="Enter your ToDo" />
            </div>
            <div className="flex justify-center ">
              <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-purple-800 hover:bg-purple-950 text-white p-2 px-10 rounded-lg mx-2 text-sm disabled:bg-purple-600 w-full h-10 ">Add</button>
            </div>
          </div>

          <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='mx-2' htmlFor="show">Show Finished</label>

          <div className="text-2xl font-bold md:ml-3 mt-3">Your ToDo</div>
          {todos.length === 0 ? <div className="flex justify-center mt-5 md:text-3xl text-2xl font-bold">Todo list is empty</div> : null}
          <div className="todos">
            {todos.map(item => {

              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center my-3">

                <div className={` ${item.isCompleted ? "line-through" : ""} md:text-xl font-medium flex items-center md:gap-16 gap-4 text-lg`}>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className="w-6 h-6" />
                  <div className="max-w-[65dvw] flex-wrap break-word">{item.todo}</div>
                </div>
                <div className="button flex gap-2 ">
                  <button onClick={(e) => handleEdit(e, item.id)} className="bg-purple-800 hover:bg-purple-950 text-white py-2 px-3 rounded-lg text-sm"><img src="assets/edit.svg" alt="" /><RiEdit2Line />
                  </button>
                  <button onClick={(e) => handleDelete(e, item.id)} className="bg-purple-800 hover:bg-purple-950 text-white py-2 px-3 rounded-lg md:mx-2 text-sm"><MdOutlineDeleteOutline />
                  </button>
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
