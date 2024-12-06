// eslint-disable-next-line no-unused-vars
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;