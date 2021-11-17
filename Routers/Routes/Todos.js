const express = require("express");
const { getAllTodos, createTodo, deleteTodo } = require("./../Controller/todos");

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);
todoRouter.post("/", createTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
