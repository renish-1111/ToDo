import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {/* box */}
        <div className="box bg-purple-300 p-5 rounded-xl min-h-[80vh]">
          {/* addTodo */}
          <div className="addToDo">
            <div className=" text-lg font-bold ">Add ToDo</div>
            <input type="text" placeholder="Enter your ToDo" />
            <button className="bg-purple-800 hover:bg-purple-900 text-white p-2 rounded-lg">Submit</button>
          </div>
          <div className="todos">
            <div className="todo flex justify-between">
              <div className="text">Learn React
              </div>
              <div className="button flex gap-2">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
