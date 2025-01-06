// import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "../../components/common/NavBar";
// import { login } from "../../../services/apiService";


// try {
//       const { token, donor } = await login(username, password);
      
//       // Save token and donor details to localStorage or context
//       localStorage.setItem("token", token);
//       localStorage.setItem("donor", JSON.stringify(donor));

//       // Redirect to dashboard or home
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.error || "Login failed");
//     }
  


// function LoginPage() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <NavBar />

//       {/* Login Section */}
//       <div className="flex justify-center items-center h-screen">
//         <form className="w-full max-w-md bg-white shadow-lg border border-red-200 rounded-lg p-8 space-y-6">
//           {/* Title */}
//           <h2 className="text-3xl font-bold text-center text-red-600">
//             Log In to Your Account
//           </h2>
//           <p className="text-center text-gray-600">
//             Access our platform to save lives and manage blood bank operations.
//           </p>

//           {/* Username Input */}
//           <div className="flex flex-col">
//             <label htmlFor="username" className="text-gray-700 font-semibold">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter your username"
//               required
//               className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-gray-700 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password"
//               required
//               className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition duration-300"
//           >
//             Log In
//           </button>

//           {/* Additional Links */}
//           <div className="text-center text-sm text-gray-600 mt-4">
//             <p>
//               Don't have an account?{" "}
//               <Link
//                 to="/registration"
//                 className="text-red-500 font-semibold hover:underline"
//               >
//                 Sign Up
//               </Link>
//             </p>
//             <p>
//               Forgot your password?{" "}
//               <Link
//                 to="/reset-password"
//                 className="text-red-500 font-semibold hover:underline"
//               >
//                 Reset it here
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import { userLogin } from "../../services/apiservice";

function UserLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your login API call
      const apiResponse = await userLogin(email, password);

      console.log(apiResponses)
      // Save token and donor details to localStorage or context
      // localStorage.setItem("token", token);s

      // Redirect to dashboard or home
      navigate("/dashboard/donor");
    } catch (err) {
      setError(err.error || "Login failed");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />

      {/* Login Section */}
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg border border-red-200 rounded-lg p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-red-600">
            Log In to Your Account
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link to="/forgotpassword" className="text-red-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLoginPage;


