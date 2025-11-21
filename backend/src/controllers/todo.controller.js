import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

export const createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
};
