import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import blog1 from '../../images/Blog/blog-1.jpeg'
import blog2 from '../../images/Blog/blog-2.jpeg'
import blog3 from '../../images/Blog/blog-3.jpeg'
import Footer from '../Footer'

const BlogProject = () => {

    const images = [blog1, blog2, blog3]

    return ( 
        <div className='flex flex-col gap-8 bg-black bg-opacity-80 text-white py-4 items-center'>
            <h1 className='text-3xl text-center w-4/5 font-black'>PERSONAL BLOG</h1>
            <p className='w-4/5 text-xl text-justify'>
                This is a personal blog I built majorly to hone my backend skills. Though I am primarily a frontend developer, I feel it's important to also have an idea of how to build the server-side of sites and apps.
                <br />
                In this blog, users can login and signup, and can also comment on blog posts as long as they have an account. I only have the authority to add, delete, or update a blog.
                <br />
                The blog makes use of React Markdown package, so when uploading a blog, the user can type symbols to render HTML components like headers, lists, etc.
            </p>
            <p className='w-4/5 flex flex-col gap-4'>
                <span className='text-2xl font-black'>Stacks used:</span>
                <ul className='flex flex-col gap-2 text-xl'>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>TailwindCSS</li>
                </ul>
            </p>

            <div className='w-4/5'>
            <Slide className=''>
                {images.map((image, index) => (
                    <div key={index} className='flex justify-center h-48'>
                        <img src={image} alt="blog" className='border-2 border-green-700'/>
                    </div>
                    ))}
            </Slide>
            </div>
            

            <a href="https://joshuaabulu.netlify.app/blog" className='w-4/5 bg-zinc-400 hover:bg-yellow-400'>
                <button className='w-full text-xl text-center py-2 font-black text-black'>View Live Project</button>
            </a>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default BlogProject;