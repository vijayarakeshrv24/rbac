import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AdminDashboard() {
    const { token,  user } = useContext(AuthContext);

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const headers = { Authorization: `Bearer ${token}` };

    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:5000/api/todos", { headers });
        setTodos(res.data);
    };

    const addTodo = async () => {
        if (!newTodo.trim()) return;
        await axios.post(
            "http://localhost:5000/api/todos",
            { title: newTodo },
            { headers }
        );
        setNewTodo("");
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`, { headers });
        fetchTodos();
    };

    const startEdit = (todo) => {
        setEditId(todo._id);
        setEditText(todo.title);
    };

    const saveEdit = async () => {
        await axios.put(
            `http://localhost:5000/api/todos/${editId}`,
            { title: editText },
            { headers }
        );
        setEditId(null);
        setEditText("");
        fetchTodos();
    };


    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>

                <div className="flex items-center gap-4">
                    <span className="font-medium text-gray-700">
                        {user?.name}
                    </span>

                    {/* <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                        Logout
                    </button> */}
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="flex gap-3 mb-6">
                    <input
                        className="border p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        className="bg-green-600 text-white px-5 rounded-lg hover:bg-green-700"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>

                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <li
                            key={todo._id}
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
                        >
                            {editId === todo._id ? (
                                <input
                                    className="border p-2 rounded-lg flex-1 mr-2"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <span className="font-medium">{todo.title}</span>
                            )}

                            <div className="flex gap-2">
                                {editId === todo._id ? (
                                    <button
                                        className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
                                        onClick={saveEdit}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="bg-yellow-500 text-white px-4 rounded-lg hover:bg-yellow-600"
                                        onClick={() => startEdit(todo)}
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    className="bg-red-600 text-white px-4 rounded-lg hover:bg-red-700"
                                    onClick={() => deleteTodo(todo._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
