const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Initiate The App
const app = express();

// App Level Middleware...................
app.use(express.json());
app.use(cors());

// Routers....................

// Login.................
// const loginRouter = require("./routers/routes/login");
// app.use("/login", loginRouter);

//Signup......................
// const signupRouter = require("./routers/routes/signup");
// app.use("/signup", signupRouter);

// Todo....................
const todoRouter = require("./routers/routes/todos");
app.use("/todos", todoRouter);

// CONSTANTS
const PORT = process.env.PORT || 5000;
//  App listener
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} .....`);
});
