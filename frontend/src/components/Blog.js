import { useEffect, useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import BlogDetails from "./BlogDetails";
import { useLogout } from "../hooks/useLogout";
import AddBlogForm from "./AddBlogForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import me from '../images/me.jpg'
import Footer from "./Footer";

const Blog = () => {

    const {dispatch, blogs} = useBlogContext()
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const [category, setCategory] = useState('All')
    const [filteredBlogs, setFilteredBlogs] = useState(blogs)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('https://joshuaabulu-api.onrender.com/api/blogs')
            const json = await response.json()
            console.log(json);

            if(response.ok){
                dispatch({
                    type: 'get blogs',
                    payload: json
                })
                setIsLoading(false)
            }
            if(!response.ok){
                console.log('error fetching blogs');
            }
        }

        fetchBlogs()
    }, [dispatch])

    const handleClick = async () => {
        await logout()
    }

    useEffect(() => {
        setFilteredBlogs(blogs)
    }, [blogs])

    const handleSelectCategory = (e) => {
        const selectedCategory = e.target.value;

        setCategory(selectedCategory);

        if (selectedCategory === 'All') {
          // If the selected category is 'All', no filtering is needed
          setFilteredBlogs(blogs);
        } else {
          // Filter blogs based on the selected category
          const afilteredBlogs = blogs.filter((blog) => blog.category === selectedCategory);
          setFilteredBlogs(afilteredBlogs);
        }
      };

    return (
        <div className="flex flex-col pt-8 bg-black opacity-80 text-white">
            <div className="flex flex-col w-4/5 self-center">
                    {
                        user &&
                        <div className="flex justify-between">
                            <h1 className="text-2xl">Hello <span className=" text-blue-600"> {user.firstName} </span></h1>

                            <button onClick={handleClick} className=" border-2 border-red-600 p-1 text-lg">Logout</button>
                        </div>
                    }

                    {
                        !user && 
                            <div className="flex justify-end gap-8 font-black text-lg">
                                <Link to='/blog/login' className=" cursor-pointer underline">Login</Link>
                                <Link to='/blog/signup' className=" cursor-pointer underline">Signup</Link>
                            </div>
                    }

                <h1 className=" text-3xl font-black py-8 text-center">Welcome to my mind!!</h1>
            </div>
            
            <div className="flex flex-col items-center gap-4">
                {user && user.email === 'abulujoshua99@gmail.com' &&
                <AddBlogForm />
                }
            </div>

            <div className=' bg-green-700 p-4 w-full text-white font-extrabold flex flex-col items-center gap-6 justify-center mb-12'>
                <h2 className="text-3xl text-center w-4/5"><strong> JOSHUA'S BLOG </strong></h2>
                <p className="text-xl text-justify w-4/5">This is where I pour out all my thoughts. I hope you have an exciting journey through my mind.</p>
            </div>

            <form className=" self-center flex flex-col items-center w-4/5 pb-4">
                <div className=" flex items-center text-lg font-extrabold">
                    <span>Select a category: </span>
                </div>
                <select 
                    className="border-2 border-black w-3/4 h- text-lg p-2 cursor-pointer text-black"
                    name="category"
                    value={category}
                    onChange={handleSelectCategory}
                    required>
                        <option value="All">All</option>
                        <option value="Anime">Anime</option>
                        <option value="Movies">Movies</option>
                        <option value="Games">Games</option>
                        <option value="Football">Football</option>
                        <option value="Christian">Christian</option>
                        <option value="Tech">Tech</option>
                        <option value="Chess">Chess</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Math">Math</option>
                        <option value="Other">Other</option>
                    </select>
            </form>

            {
                isLoading && !blogs && 
                <div className="text-2xl font-black flex flex-col items-center text-center py-4">
                    Loading blogs...
                    <span className="text-lg italic font-extrabold">This might take few seconds</span>
                </div>
            }

            <div className="flex flex-col gap-4 items-center">
                {filteredBlogs && filteredBlogs.map((blog) => (
                    <BlogDetails key={blog._id} blog={blog}/>
                ))}
            </div>
            
            <div className="">
                <Footer />
            </div>
        </div>
     );
}
 
export default Blog;