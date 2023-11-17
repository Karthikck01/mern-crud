import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import AddProduct from "./AddProduct";
function App() {

  return (
    <>
      <div className="max-h-auto min-h-screen bg-slate-900 container">
        <div className="text-3xl font-black p-3 shadow shadow-slate-800 px-9">
          <span className="bg-gradient-to-r from-teal-300 via-green-400 to-teal-600 bg-clip-text text-transparent">
            Product crud
          </span>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/edit/:id" element={<Edit />}/>
          <Route path="/add" element={<AddProduct />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
