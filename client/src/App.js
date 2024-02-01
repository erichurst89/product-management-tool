import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCreate from "./pages/ProductCreate";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCreate />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


