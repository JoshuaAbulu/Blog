import { useParams } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";

const UpdateBlog = () => {

    const {blogs} = useBlogContext()
    const {id} = useParams()
    const [blog, setBlog] = useState(null)
    const {dispatch} = useBlogContext()
    const {user} = useAuthContext()

//     const blog = blogs.map((blog) => {
//         if(blog._id === id){
//             return blog
//         }
// })

useEffect(() => {
    const fetchBlog = async () => {
        const response = await fetch(`/api/blogs/${id}`)
        const json = await response.json()
        

        if(response.ok){
            setBlog(json)
        }
        if(!response.ok){
            console.log('error fetching blog');
        }
    }

    fetchBlog()
    
}, [dispatch, id])

useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setCategory(blog.category);
      setBody(blog.body);
      setImage(blog.image);
    }
  }, [blog]);
    const [title, setTitle] = useState(blog && blog.title)
    const [category, setCategory] = useState(blog && blog.category)
    const [body, setBody] = useState(blog && blog.body)
    const [error, setError] = useState(null)
    
    const [image, setImage] = useState(blog && blog.image)

const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`/api/blogs/${blog._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({title, category, body, image})
    })
    const json = await response.json()

    if(response.ok){
        setTitle('')
        setBody('')
        setCategory('')
        setImage(null)
    }

    if(!response.ok){
        setError(json.error)
    }
}

const convertToBase64 = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
        setImage(reader.result)
    }
    reader.onerror = () => {
        console.log(`Error: ${error}`);
    }
}

blog && console.log(blog);

if (blog === null) {
    // Show loading indicator or placeholder while blog is being fetched
    return <div>Loading...</div>;
  }

    return ( 
        <div className="w-4/5 py-8">
            {blog &&
        <form onSubmit={handleSubmit} className="">
            <h1 className="text-2xl font-black">Update a Blog</h1>

            <div className="flex flex-col gap-4 pt-8">

                <input 
                type="text"
                value={title}
                placeholder="Title..."
                onChange={(e) => setTitle(e.target.value)}
                required
                className=" border-2 border-black w-2/3 h-8 text-lg pl-2 py-4"
                />

                <select 
                className="border-2 border-black w-2/3 h-12 text-lg p-2 cursor-pointer"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required>
                    <option value="">Select a category</option>
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

                <textarea 
                className="border-2 border-black w-2/3 h-24 p-2 text-lg"
                value={body}
                placeholder="Body..."
                onChange={(e) => setBody(e.target.value)}
                required />

                <input
                className=" cursor-pointer"
                type="file"
                accept="image/*"
                onChange={convertToBase64} />
                {image && <img width={100} height={100} src={image} alt="upload"/>}

                <button type="submit" className=" border-2 border-blue-600 p-1 text-lg w-max">Update blog</button>
                {error && <span>{error}</span>}

             </div>
        </form>
}
    </div>
     );
}
 
export default UpdateBlog;