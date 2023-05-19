import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBlogContext } from "../hooks/useBlogContext";
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogDetails = ({blog}) => {

    

    const {user} = useAuthContext()
    const {dispatch, blogs} = useBlogContext()

    

    const handleClick = async () => {
        const response = await fetch(`https://joshuaabulu-api.onrender.com/api/blogs/${blog._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({
                type: 'delete blog',
                payload: json
            })
        }
    }

    return ( 
        <div className="flex flex-col border-2 w-4/5 items-center bg-blue-200">
                {blog.image && <img src={blog.image} alt="blogimg" className=" w-full" />}
                <div className="w-4/5 flex flex-col pt-8 gap-4">
                    <h2 className="text-2xl font-black text-justify">{blog.title}</h2>
                    <h3 className=" text-green-700 text-xl">Posted {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}</h3>
                    <ReactMarkdown className="markdown text-xl">{blog.body.split(".")[0]} 
                    </ReactMarkdown>
                    <Link to={`/blog/${blog._id}`} className=" font-black text-2xl">Read more...</Link>
                </div>

                <br />
                <br />

                {user && user.email === 'abulujoshua99@gmail.com' &&
                <div className="w-full flex justify-between">
                <button onClick={handleClick} className="w-max border-2 border-red-700 p-1 text-lg">Delete blog</button>
                <Link to={`/blog/update/${blog._id}`} className="text-lg">
                    <button className="w-max border-2 border-blue-700 p-1 text-lg"> Update blog </button></Link>
                </div>
                }
        </div>
     );
}
 
export default BlogDetails;