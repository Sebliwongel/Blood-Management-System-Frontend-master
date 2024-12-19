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
    const response = await apiClient.post('/donor/login', { email, password });
    return response.data; // Contains token and user details
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
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


  export const getHospitals = async () => {
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



// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
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
