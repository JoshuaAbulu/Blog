import dict from '../images/Dictionary.jpeg'
import joses from '../images/Joses.jpeg'
import blog from '../images/Blog.jpeg'
import {Link} from 'react-router-dom'
import Footer from './Footer'

const Projects = () => {
    return ( 
        <div className='flex flex-col gap-4 items-center pt-4 bg-black bg-opacity-80 text-white'>
            <div className='w-4/5 flex justify-center text-center'>
                <h1 className='text-3xl font-black'>MY <br /> <span className=' text-yellow-400'>WORKS</span></h1>
            </div>

            <span className='w-4/5 text-xl italic text-center'>Check out some of my works:</span>

            <div className='w-4/5 flex flex-col gap-4'>
                <div className='flex flex-col rounded-t-2xl work hover:opacity-90 hover:border-2 hover:border-yellow-400'>
                    <img src={blog} alt="blog" className=' rounded-t-2xl'/>
                    <Link to='/works/blog' className='bg-zinc-400 text-black cursor-pointer text-center font-black text-lg py-1 hover:bg-yellow-400'>View Project</Link>
                    <a href="https://github.com/JoshuaAbulu/Joses" className='bg-black text-center cursor-pointer font-black text-lg py-1 hover:bg-yellow-400'>Go To GitHub</a>
                </div>
                <div className='flex flex-col rounded-t-2xl work2 hover:opacity-90 hover:border-2 hover:border-yellow-400'>
                    <img src={dict} alt="dictionary" className=' rounded-t-2xl'/>
                    <Link to='/works/dictionary' className='text-center bg-zinc-400 cursor-pointer text-black font-black text-lg py-1 hover:bg-yellow-400'>View Project</Link>
                    <a href="https://github.com/JoshuaAbulu/Dictionary" className='bg-black text-center cursor-pointer font-black text-lg py-1 hover:bg-yellow-400'>Go To GitHub</a>
                </div>
                <div className='flex flex-col rounded-t-2xl work hover:opacity-90 hover:border-2 hover:border-yellow-400'>
                    <img src={joses} alt="joses" className=' rounded-t-2xl'/>
                    <Link to='/works/joses' className='bg-zinc-400 text-black cursor-pointer text-center font-black text-lg py-1 hover:bg-yellow-400'>View Project</Link>
                    <a href="https://github.com/JoshuaAbulu/Joses" className='bg-black text-center cursor-pointer font-black text-lg py-1 hover:bg-yellow-400'>Go To GitHub</a>
                </div>
            </div>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default Projects;