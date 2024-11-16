import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 p-5">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6 ring-1 ring-lime-600">
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white rounded-md py-2 font-semibold hover:bg-lime-500 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    );
};
export default Login