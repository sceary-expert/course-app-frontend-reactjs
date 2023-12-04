// ApiContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://course-app-node.onrender.com/api/courses')
      .then((response) => response.json())
      .then((data) =>{
        setCourses(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(true);
      });
  }, []);

  return <ApiContext.Provider value={{ courses, loading }}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };
