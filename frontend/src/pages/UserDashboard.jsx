import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
    const { token, user } = useContext(AuthContext);
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:5000/api/todos", {
            headers: { Authorization: `Bearer ${token}` }
        });
        setTodos(res.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
                <h1 className="text-3xl font-bold">User Dashboard</h1>
                <div className="flex items-center gap-4">
                    <span className="font-bold  text-gray-700">
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
                <h2 className="text-xl font-semibold mb-4">Your Todos</h2>

                <ul className="space-y-3">
                    {todos.map(todo => (
                        <li
                            key={todo._id}
                            className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                        >
                            <span className="font-medium">{todo.title}</span>
                        </li>
                    ))}
                </ul>

                {todos.length === 0 && (
                    <p className="text-gray-500 text-center mt-4">
                        No todos available.
                    </p>
                )}
            </div>
        </div>
    );
}
