const { default: CourseCard } = require("./CourseCard");

const AllCourseCard = ({ filteredCourses }) => {
    // Check if filteredCourses is undefined or not an array
    if (!filteredCourses || !Array.isArray(filteredCourses)) {
      return <div>No courses available.</div>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-14 gap-y-14">
        {filteredCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    );
  };
  
export default AllCourseCard  