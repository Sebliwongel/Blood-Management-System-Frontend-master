import axios from 'axios';

// Set the base URL for your API
const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // Update this with your backend API URL
});

// Add a request interceptor to add JWT token to headers (if using JWT)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage or state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const donorLogin = async (email, password) => {
  try {
    const response = await api.post('/auth/donor/login', { email, password });
    return response.data; // Contains token and user details
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};
export const userLogin = async (email, password) => {
  try {
    const response = await api.post('/auth/user/login', { email, password });
    return response.data; // Contains token and user details
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

export const HospitalLogin = async (email, password) => {
  try {
    const response = await api.post('/auth/Hospital/login', { email, password });
    return response.data; // Contains token and user details
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }

};
export const getScheduledAppointments = async () => {
  const response = await api.get('/appointments/scheduled');
  return response.data;
};

// services/bloodCollectionService.js

export const createBloodCollection = async (data) => {
  try {
    const response = await fetch('/api/blood-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save blood collection data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error saving blood collection:', error);
    throw error;
  }
};


export const fetchDonors = async () => {
  try {
    const response = await api.get('/donor');  // Adjust to your route
    return response.data;
  } catch (error) {
    console.error('Error fetching donors:', error);
    throw error;
  }
};

export const createDonor = async (donorData) => {
  try {
    const response = await api.post('/donor', donorData);
    return response.data;
  } catch (error) {
    console.error('Error creating donor:', error);
    throw error;
  }
};

export const updateDonor = async (donorId, donorData) => {
    try {
      const response = await api.put(`/donor/${donorId}`, donorData);  // PUT request to update donor
      return response.data;
    } catch (error) {
      console.error('Error updating donor:', error);
      throw error;
    }
  };
  
  // Patch Donor (PATCH request - partial update)
  export const patchDonor = async (donorId, donorData) => {
    try {
      const response = await api.patch(`/donor/${donorId}`, donorData);  // PATCH request for partial update
      return response.data;
    } catch (error) {
      console.error('Error patching donor:', error);
      throw error;
    }
  };
  
  // Delete Donor (DELETE request)
  export const deleteDonor = async (donorId) => {
    try {
      const response = await api.delete(`/donors/${donorId}`);  // DELETE request to remove donor
      return response.data;
    } catch (error) {
      console.error('Error deleting donor:', error);
      throw error;
    }
  };

  export const getDonorByPhoneNumber = async (phoneNumber) => {
    try {
      const response = await api.get(`/donor/phone/${phoneNumber}`); // GET request to fetch donor by phone number
      return response.data; // Return the response data (donor details)
    } catch (error) {
      console.error('Error fetching donor by phone number:', error);
      throw error; // Throw error for handling in the calling function
    }
  };
  
  export const saveBloodInventory = async (data) => {
    try {
      const response = await api.post("/blood", data); // POST request to save blood inventory
      return response.data; // Return the newly created record
    } catch (error) {
      console.error("Error saving blood inventory:", error);
      throw error;
    }
  };
  
  export const fetchHospitals = async () => {
    try {
      const response = await api.get("/hospitals");
      return response.data;
    } catch (error) {
      console.error("Error fetching hospital:", error.response?.data || error.message);
      throw error;
    }
  };
  
  export const createHospital = async (hospitalData) => {
    try {
      console.log("Sending hospital data:", hospitalData);
      const response = await api.post("/hospitals", hospitalData);
      console.log("Hospital created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating hospital:", error.response?.data || error.message);
      throw error;
    }
  };
  
  
  
  // Update Hospital (PUT request - full update)
export const updateHospital = async (hospitalId, hospitalData) => {
  try {
    const response = await api.put(`/hospitals/${hospitalId}`, hospitalData); // PUT request to update hospital
    return response.data;
  } catch (error) {
    console.error("Error updating hospital:", error.response?.data || error.message);
    throw error;
  }
};

// Patch Hospital (PATCH request - partial update)
export const patchHospital = async (hospitalId, hospitalData) => {
  try {
    const response = await api.patch(`/hospitals/${hospitalId}`, hospitalData); // PATCH request for partial update
    return response.data;
  } catch (error) {
    console.error("Error patching hospital:", error.response?.data || error.message);
    throw error;
  }
};

// Delete Hospital (DELETE request)
export const deleteHospital = async (hospitalId) => {
  try {
    const response = await api.delete(`/hospitals/${hospitalId}`); // DELETE request to remove hospital
    return response.data;
  } catch (error) {
    console.error("Error deleting hospital:", error.response?.data || error.message);
    throw error;
  }
};


export const createOrder = async (orderData) => {
  try {
    console.log("Sending Order Data:", orderData);
    const response = await api.post("/orders", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error.message);
    throw error;
  }
};



// Fetch all orders
export const getAllOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Fetch an order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

// Update an order's status by ID
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await api.put(`/orders/${orderId}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

// Delete an order by ID
export const deleteOrder = async (orderId) => {
  try {
    const response = await api.delete(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};

// Add this function to your existing API service

export const createStaff = async (staffData) => {
  try {
    const response = await api.post('/users', staffData);  // Adjust this route if needed
    return response.data;
  } catch (error) {
    console.error('Error creating staff:', error);
    throw error;
  }
};

export const fetchStaff = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.response?.data || error.message);
    throw error;
  }
};

export const QualificationApiService = {
  // Fetch all qualifications
  async getAllQualifications() {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching qualifications:", error);
      throw new Error(error.response?.data || "Failed to fetch qualifications.");
    }
  },

  // Fetch a qualification by ID
  async getQualificationById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching qualification with ID ${id}:`, error);
      throw new Error(error.response?.data || "Failed to fetch qualification.");
    }
  },

  // Create a new qualification
  async createQualification(qualificationData) {
    try {
      const response = await axios.post(BASE_URL, qualificationData);
      return response.data;
    } catch (error) {
      console.error("Error creating qualification:", error);
      throw new Error(error.response?.data || "Failed to create qualification.");
    }
  },

  // Update a qualification by ID
  async updateQualification(id, updatedData) {
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Error updating qualification with ID ${id}:`, error);
      throw new Error(error.response?.data || "Failed to update qualification.");
    }
  },

  // Delete a qualification by ID
  async deleteQualification(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting qualification with ID ${id}:`, error);
      throw new Error(error.response?.data || "Failed to delete qualification.");
    }
  },
};

// Get all appointments
export const getAllAppointments = async () => {
  try {
    const response = await api.get('/appointments');
    return response.data;
  } catch (error) {
    console.error('Error fetching all appointments:', error);
    throw error;
  }
};

// Get a single appointment by ID
export const getAppointmentById = async (id) => {
  try {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching appointment with ID ${id}:`, error);
    throw error;
  }
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating donor:', error);
    throw error;
  }
};
// Update an existing appointment by ID
export const updateAppointment = async (id, appointmentData) => {
  try {
    const response = await api.patch(`/appointments/${id}`, appointmentData);
    return response.data;
  } catch (error) {
    console.error(`Error updating appointment with ID ${id}:`, error);
    throw error;
  }
};

// Optionally, add the delete function if needed in the future
// Delete an appointment by ID
export const deleteAppointment = async (id) => {
  try {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting appointment with ID ${id}:`, error);
    throw error;
  }
};


export const createBloodInventory = async (bloodData) => {
  try {
    const response = await api.post('/blood', bloodData); // Adjust this route if needed
    return response.data;
  } catch (error) {
    console.error('Error creating blood inventory:', error);
    throw error;
  }
};

export const getAllBloodInventories = async () => {
  try {
    const response = await api.get('/blood');
    return response.data;
  } catch (error) {
    console.error('Error fetching blood inventories:', error);
    throw error;
  }
};

export const getBloodInventoryById = async (id) => {
  try {
    const response = await api.get(`/blood/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blood inventory with ID ${id}:`, error);
    throw error;
  }
};

export const updateBloodInventory = async (id, bloodData) => {
  try {
    const response = await api.put(`/blood/${id}`, bloodData);
    return response.data;
  } catch (error) {
    console.error(`Error updating blood inventory with ID ${id}:`, error);
    throw error;
  }
};

export const deleteBloodInventory = async (id) => {
  try {
    const response = await api.delete(`/blood/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting blood inventory with ID ${id}:`, error);
    throw error;
  }
};

export const patchBloodInventory = async (id, bloodData) => {
  try {
    const response = await api.patch(`/blood/${id}`, bloodData);
    return response.data;
  } catch (error) {
    console.error(`Error patching blood inventory with ID ${id}:`, error);
    throw error;
  }
};