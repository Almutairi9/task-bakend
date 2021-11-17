const fs = require("fs");

let Todos = [];

fs.readFile("./todoDB.json", (err, date) => {
  if (err) {
    return err;
  } else {
    Todos = JSON.parse(date.toString());
  }
});

const getAllTodos = (req, res) => {
  console.log("get log", Todos);
  // res.state(200)
  res.status(200);
  res.json(Todos);
};

const createTodo = (req, res) => {
  const todo = {
    id: Todos.length,
    name: req.body.name,
    iscomplet: false,
    isDel: false,
  };

  Todos.push(todo);

  fs.writeFile("./tosodb.json", JSON.stringify(Todos), (err) => {
    res.status(200).json(Todos);
    console.log("post log", Todos);
  });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  let check = false;

  Todos.forEach((todo) => {
    if (todo.id == id) {
      todo.isDel = true;
      check = true;
    }
  });

  if (check) {
    fs.writeFile("./todoDB.json", JSON.stringify(Todos), (err) => {
      res.status(200).json(Todos);
    });
  } else {
    res.status(400).json("No list there ..! ");
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo };
