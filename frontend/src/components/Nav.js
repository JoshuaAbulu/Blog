import {Link} from 'react-router-dom'
import me from '../images/me.jpg'

const Nav = () => {
    return ( 
        <div className='bg-green-700 pb-48 w-screen h-screen absolute z-10 grid grid-cols-2'>
            <div className=' col-span-1 flex justify-center items-center'>
                <div className=' h-48 w-48 rounded-full bg-white dp'>
                    {/* <img src={me} alt="me" className='' /> */}
                </div>
            </div>
            <div className=' col-span-1 flex justify-center items-center'>
                <ul className='flex flex-col justify-around gap-16 text-2xl'>
                    <li>
                        <Link to='/' className='font-bold underline'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='font-bold underline'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/works' className='font-bold underline'>My Works</Link>
                    </li>
                    <li>
                        <Link to='/blog' className='font-bold underline'>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;