// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../../../components/common/NavBar";
// import imghptl from "../../../assets/img/image copy 4.png";
// import HospitalRegistrationForm from "../../../components/forms/registration/HospitalRegistrationForm";
// import { createHospital } from "../../../services/apiservice"; // Import the function

// function HospitalRegistrationPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrorMessage(""); // Clear error when user makes changes
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     if (
//       !formData.name ||
//       !formData.address ||
//       !formData.email ||
//       !formData.username ||
//       !formData.password ||
//       !formData.confirmPassword 
//     ) {
//       setErrorMessage("Please fill in all fields.");
//       return;
//     }

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setErrorMessage("Please enter a valid email address");
//       return;
//     }

//     // Basic password validation (at least 6 characters)
//     if (formData.password.length < 6) {
//       setErrorMessage("Password must be at least 6 characters long");
//       return;
//     }

//     try {
//       // Call the createHospital function
//       const response = await createHospital(formData);
//       console.log("Hospital registered successfully:", response);
//       navigate("/registration/hospital/success");
//     } catch (error) {
//       console.error("Error registering hospital:", error.response?.data || error.message);
//       setErrorMessage("Failed to register hospital. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col bg-white min-h-screen">
//       <NavBar />
//       <div className="container mx-auto px-4 mt-20 ">
//         <h1 className="text-2xl font-semibold text-center mb-6">
//           Welcome to Blood and Tissue Supply <br /> Chain Management System
//         </h1>
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//           <div className="w-full md:w-1/2 max-w-md">
//             <h2 className="text-2xl text-black font-bold mb-6 text-center md:text-left">
//               Register as Hospital
//             </h2>
//             <HospitalRegistrationForm
//               formData={formData}
//               handleChange={handleChange}
//               errorMessage={errorMessage}
//               onSubmit={handleSubmit}
//             />
//           </div>
//           <div className="w-full md:w-1/2 max-w-md">
//             <img
//               src={imghptl}
//               alt="Hospital Registration"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HospitalRegistrationPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import imghptl from "../../../assets/img/image copy 4.png";
import HospitalRegistrationForm from "../../../components/forms/registration/HospitalRegistrationForm";
import { createHospital } from "../../../services/apiservice";

function HospitalRegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(""); // Clear error when user makes changes
  };

  const handleSubmit = async (e) => {

    if (
      !formData.name ||
      !formData.address ||
      !formData.email ||
      !formData.username ||
      !formData.password
      // !formData.confirmPassword
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await createHospital({
      name: formData.name,
      address: formData.address,
      email: formData.email,
      username: formData.username,
      passord:formData.password
      });
      console.log("Hospital registered successfully:", response);
      navigate("/registration/hospital/success");
    } catch (error) {
      console.error("Error registering hospital:", error.response?.data || error.message);
      setErrorMessage("Failed to register hospital. Please try again.");
    }
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Welcome to Blood and Tissue Supply <br /> Chain Management System
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-2xl text-black font-bold mb-6 text-center md:text-left">
              Register as Hospital
            </h2>
            <HospitalRegistrationForm
              formData={formData}
              handleChange={handleChange}  // Pass handleChange here
              errorMessage={errorMessage}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <img
              src={imghptl}
              alt="Hospital Registration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalRegistrationPage;
