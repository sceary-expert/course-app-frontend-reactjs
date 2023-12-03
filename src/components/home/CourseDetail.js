import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const CourseDetail = () =>{
    const courseId = useParams()
    const [course, setCourse] = useState({id:"-1"});
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [buttonText, setButtonText] = useState("Enroll Now");
    
    function EnrollHandler()
    {   
        const enrolledCourses = JSON.parse(localStorage.getItem('courses')) || [];
        const newCourse = course;
        const isAlreadyEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse.id.toString() === newCourse.id.toString());
        
        
        
        if(isAlreadyEnrolled)
        {
            setIsEnrolled(true);
            setButtonText("Already Enrolled")
        }
        if (!isEnrolled) {
            let enrolledCourses = JSON.parse(localStorage.getItem('courses')) || [];
            const newCourse = course;
            enrolledCourses = [...enrolledCourses, newCourse];
            localStorage.setItem('courses', JSON.stringify(enrolledCourses));
            setIsEnrolled(true);
            setButtonText("Already Enrolled")
        } else {
            // Handle case where the course is already enrolled
            console.log("Course is already enrolled.");
        }
        // enrolledCourses = [...enrolledCourses, newCourse];
        // localStorage.setItem('courses', JSON.stringify(enrolledCourses));
        // setIsEnrolled(true);
    }
    useEffect(() =>{
        
        
        
        

        //Display score cards
        axios.get('https://course-app-node.onrender.com/api/courses')
        .then(response => {
          console.log("response data ",response.data);
          console.log("id ", courseId.courseId)
        //   const result = response.data.filter((e) => e.id === courseId.courseId)
        const allCourses = response.data;
        let result;
        for(let i = 0; i < allCourses.length; i++)
        {
            if(allCourses[i].id.toString() === courseId.courseId.toString())result = allCourses[i];
        }
        console.log("result", result)
        setCourse(result)
        const enrolledCourses = JSON.parse(localStorage.getItem('courses')) || [];
        const newCourse = course;
        console.log("new course id " ,result.id.toString());
        const isAlreadyEnrolled = enrolledCourses.some((enrolledCourse) => {
            console.log("enrolledCourse.id.toString() ", enrolledCourse.id.toString());
            return enrolledCourse.id.toString() === result.id.toString()
        });
        
        console.log("already " ,isAlreadyEnrolled)
        
        if(isAlreadyEnrolled)
        {
            setIsEnrolled(true);
            setButtonText("Already Enrolled")
        }
        //   if (result.length > 0) {
        //     setCourse(result[0]);
        //   } else {
        //     console.error("Course not found");
        //   }
          // Additional logic can be added here based on the response
          return;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },[])
    console.log(course)
    
    return(
        <div>
            {course?(

                <div>
            
                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerfce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={course.thumbnail}/>
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{course.enrollmentStatus}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{course.name}</h1>
                                <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">{course.instructor}</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <div className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                    </div>
                                    <div className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                    </div>
                                    <div className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                    </div>
                                </span>
                                </div>
                                <p className="leading-relaxed">{course.description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                
                                    {/* <div className="flex ml-6 items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-violet-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">{course.duration}</span>
                                <button 
                                className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded"
                                onClick={EnrollHandler}
                                >{buttonText}</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            ):(
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
        </div>

        
    )
}
export default CourseDetail