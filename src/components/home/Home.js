import { useEffect, useState } from "react";


import AllCourseCard from "./AllCourseCard";
import { useApi } from "../../context/ApiContext";




export default function Home() {

    // const [courses, setCourses] = useState([]);
    const { courses } = useApi();
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() =>{
        function searchCourses(query) {
            // Convert the query to lowercase for case-insensitive search
            const lowerCaseQuery = query.toLowerCase();
          
            // Filter courses based on the query
            const searchResults = courses.filter(course => {
              const lowerCaseName = course.name.toLowerCase();
              const lowerCaseInstructor = course.instructor.toLowerCase();
          
              // Check if either course name or instructor contains the query
              return (
                lowerCaseName.includes(lowerCaseQuery) ||
                lowerCaseInstructor.includes(lowerCaseQuery)
              );
            });
          
            return searchResults;
        }
        setFilteredCourses(searchCourses(searchValue));
     }, [searchValue, courses])
     
    



    // useEffect(() =>{
    //     //Display score cards
    //     axios.get('https://course-app-node.onrender.com/api/courses')
    //     .then(response => {
    //       console.log(response.data);
    //       setCourses(response.data);
    //       setFilteredCourses(response.data);

    //       // Additional logic can be added here based on the response
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // },[])
    return (
        
        <div className="mx-auto w-full max-w-7xl m-2 rounded-md">
            <div className="bg-violet-700 h-50 p-8 rounded-lg mb-4 md:mb-8">
                <div className="container mx-auto py-8 rounded-lg">
                        <input
                        className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
                        type="search"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => {setSearchValue(e.target.value)}}
                        />
                        <nav className="flex">
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mr-3 bg-indigo hover:bg-indigo-darker" type="button">
                                online courses
                            </button>
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                offline courses
                            </button>
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button">
                                trending
                            </button>
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                NEET
                            </button>
                            <button className={` bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button"`}>
                                JEE
                            </button>
                            {/* <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                Curry
                            </button>
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button">
                                Fragrance
                            </button>
                            <button className="bg-violet-900 hover:bg-violet-600 text-white py-3 px-4 font-medium ml-auto bg-indigo-darker hover:bg-indigo" type="button">
                                Amchoor
                            </button> */}
                        </nav>
                </div>
            </div>

            <div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {filteredCourses.map((course) => (
                <CourseCard course={course} key={course.id} />
                ))}
            </div> */}
                <AllCourseCard filteredCourses = {filteredCourses} />
                
            </div>
        </div>
    );
}
