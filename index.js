const express = require("express");
const { connectToDatabase } = require("./database/db.js");
const productRoute = require("./routes/product.route.js");

const app = express();
const port = process.env.PORT || 3000;

//middleware

app.use(express.json());

//route handling
app.use("/api/product", productRoute);

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to the server successfully!");
    });
  })
  .catch((error) => {
    console.log("Connection to the server failed!", error.message);
  });
