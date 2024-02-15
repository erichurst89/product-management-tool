import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCreate from "./pages/ProductCreate";
import "./style.css"
import ListingPage from "./pages/ListingPage";
import './ListingPage.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCreate />} />
          <Route path="/listing" element={<ListingPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


