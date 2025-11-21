import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);

            login(res.data.user, res.data.token);

            if (res.data.user.role === "admin") navigate("/admin");
            else navigate("/user");
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h2>

                {error && (
                    <p className="bg-red-100 text-red-600 p-3 mb-4 text-center rounded-md">
                        {error}
                    </p>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don’t have an account?
                    <a
                        href="/register"
                        className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
