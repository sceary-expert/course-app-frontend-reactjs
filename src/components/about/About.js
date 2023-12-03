import {  useCallback, useEffect, useState } from "react";
import EnrolledCourse from "./EnrolledCourse";


export default function About() {
        const[enrolledCourses, setEnrolledCourses] = useState([]);
        

        const updateEnrolledCourses = useCallback(() => {
            const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
            setEnrolledCourses(storedCourses);
          }, []); // Empty dependency array ensures this callback doesn't change
        
          useEffect(() => {
            updateEnrolledCourses(); // Call the callback when the component mounts
          }, [updateEnrolledCourses]); 
        
    
        if (!enrolledCourses || !Array.isArray(enrolledCourses)) {
            return <div>No courses available.</div>;
          }
        
          return (
            <div className="gap-4">
              {enrolledCourses.map((course) => (
                <EnrolledCourse course={course} key={course.id} />
              ))}
            </div>
          );
    
}