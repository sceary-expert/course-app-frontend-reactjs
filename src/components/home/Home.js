import CourseCard from "./CourseCard";



export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="bg-blue-700 h-50 p-8">
                <div className="container mx-auto py-8">
                        <input
                        className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
                        type="search"
                        placeholder="Search..."
                        />
                        <nav className="flex">
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mr-3 bg-indigo hover:bg-indigo-darker" type="button">
                                online courses
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                offline courses
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button">
                                trending
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                NEET
                            </button>
                            <button className={` bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button"`}>
                                JEE
                            </button>
                            {/* <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" type="button">
                                Curry
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" type="button">
                                Fragrance
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-600 text-white py-3 px-4 font-medium ml-auto bg-indigo-darker hover:bg-indigo" type="button">
                                Amchoor
                            </button> */}
                        </nav>
                </div>
            </div>

            <div>
                <CourseCard/>
            </div>
        </div>
    );
}
