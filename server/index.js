import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'inventoryprojectdb'
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello this is the backend.");
  });

app.get("/product", (req, res) => {
    const q = "SELECT * FROM product";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  

  app.post("/product", (req, res) => {
    const q = "INSERT INTO product (`productName`, `upc`, `availableOn`, `properties`) VALUES (?)";
    const values = [req.body.productName, req.body.upc, req.body.availableOn, req.body.properties];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Product has been created successfully.");
    });
  });




app.listen(5000, () => {
    console.log("Connected to backend!");
});