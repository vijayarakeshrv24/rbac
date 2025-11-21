import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", authenticate, getTodos);

router.post("/", authenticate, authorizeRoles("admin"), createTodo);
router.put("/:id", authenticate, authorizeRoles("admin"), updateTodo);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteTodo);

export default router;
