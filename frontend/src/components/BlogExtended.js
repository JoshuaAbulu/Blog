import { useParams } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";
import ReactMarkdown from 'react-markdown'
import { useEffect, useState, React } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import {Link} from 'react-router-dom'


const BlogExtended = () => {

    const {user} = useAuthContext()
    const {dispatch, blogs} = useBlogContext()
    const [blog, setBlog] = useState(null)

    const {id} = useParams()
    
    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`https://joshuaabulu-api.onrender.com/api/blogs/${id}`)
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


    blog && console.log(blog);

    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`https://joshuaabulu-api.onrender.com/api/blogs/${blog._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({comments: [...blog.comments, {comment: comment, person: user.firstName}]})
        })
        const json = await response.json()

        if(response.ok){
            setComment('')
            setBlog({...blog, comments: json.comments})
        }
    }


    return ( 
        <div className="flex flex-col items-center py-10">
            { blog && 
            <div className="w-4/5">
                <h1 className="text-4xl font-black py-8">{blog.title}</h1>
                <ReactMarkdown className='markdown'>{blog.body}</ReactMarkdown>

                <div>
                {user &&
                <form onSubmit={handleSubmit} className="pb-12">
                    <h1 className="font-black text-2xl py-4">Leave a Comment</h1>
                    <textarea 
                    rows="10"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border-2 border-black p-2 my-4 text-lg w-full"
                    placeholder="Comment..." />

                    <button type="submit" className="border-2 border-blue-600 text-lg p-1 mb-4">Comment</button>
                </form>
                }
                </div>

                {
                    !user && 
                    <p className="font-black text-lg my-8">
                        <Link to='/blog/signup' className="underline"> <em>Sign up </em> </Link> or 
                        <Link to='/blog/login' className="underline"> <em> Login </em> </Link> 
                        to leave a comment</p>
                }

                <div>
                <h3 className="font-black text-2xl">Comments:</h3>
                <ul className="mt-4">
                {blog.comments.map((commentt) => (
                    <li key={commentt.comment}> {commentt.comment} <br /> <em> by <strong> {commentt.person} </strong> </em> <br /> <br /> </li>
                ))}
                </ul>
                </div>

            </div>}
        </div>
     );
}
 
export default BlogExtended;