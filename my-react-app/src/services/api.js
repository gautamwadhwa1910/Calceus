const API_BASE_URL = 'http://localhost:5000/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Create headers with auth token
const createHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: createHeaders(),
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Auth API
export const authAPI = {
  login: (credentials) => 
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    }),

  register: (userData) => 
    apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    }),

  getCurrentUser: () => 
    apiRequest('/auth/me')
};

// Products API
export const productsAPI = {
  getProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/products?${queryString}`);
  },

  getProduct: (id) => 
    apiRequest(`/products/${id}`),

  getFeaturedProducts: () => 
    apiRequest('/products/featured/list'),

  getNewProducts: () => 
    apiRequest('/products/new/list'),

  addReview: (productId, reviewData) => 
    apiRequest(`/products/${productId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(reviewData)
    })
};

// Orders API
export const ordersAPI = {
  createOrder: (orderData) => 
    apiRequest('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    }),

  getMyOrders: () => 
    apiRequest('/orders/my-orders'),

  getOrder: (id) => 
    apiRequest(`/orders/${id}`)
};

// Users API
export const usersAPI = {
  updateProfile: (userData) => 
    apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData)
    }),

  addToWishlist: (productId) => 
    apiRequest(`/users/wishlist/${productId}`, {
      method: 'POST'
    }),

  removeFromWishlist: (productId) => 
    apiRequest(`/users/wishlist/${productId}`, {
      method: 'DELETE'
    }),

  getWishlist: () => 
    apiRequest('/users/wishlist')
};