import dict from '../images/Dictionary.jpeg'
import joses from '../images/Joses.jpeg'
import {Link} from 'react-router-dom'
import Footer from './Footer'

const Projects = () => {
    return ( 
        <div className='flex flex-col gap-4 items-center pt-4 bg-black bg-opacity-80 text-white'>
            <div className='w-4/5 flex justify-center text-center'>
                <h1 className='text-3xl font-black'>MY <br /> <span className=' text-yellow-400'>WORKS</span></h1>
            </div>

            <span className='w-4/5 text-xl italic text-center'>Check out some of my sites:</span>

            <div className='w-4/5 flex flex-col gap-4'>
                <div className='flex flex-col rounded-2xl work'>
                    <img src={dict} alt="dictionary" className=' rounded-t-2xl'/>
                    <a href="https://js-dictionary-josh.netlify.app/" className='text-center bg-zinc-400 cursor-pointer text-black font-black text-lg py-1'>View Project</a>
                    <a href="https://github.com/JoshuaAbulu/Dictionary" className='bg-black text-center cursor-pointer font-black text-lg py-1'>Go To GitHub</a>
                </div>
                <div className='flex flex-col rounded-2xl work2'>
                    <img src={joses} alt="joses" className=' rounded-t-2xl'/>
                    <a href="https://josesstores.netlify.app/" className='bg-zinc-400 text-black cursor-pointer text-center font-black text-lg py-1'>Project</a>
                    <a href="https://github.com/JoshuaAbulu/Joses" className='bg-black text-center cursor-pointer font-black text-lg py-1'>GitHub</a>
                </div>
            </div>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default Projects;