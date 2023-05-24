import {Link} from 'react-router-dom'
import me from '../images/me.jpg'

const Nav = ({nav}) => {
    return ( 
        <div className='bg-green-700 pb-24 w-screen h-screen overflow-hidden absolute z-10 flex flex-col justify-center gap-12 nav'>
            <div className='flex justify-center items-center'>
                <div className=' h-48 w-48 rounded-full bg-white dp img'>
                    {/* <img src={me} alt="me" className='' /> */}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex flex-col justify-around gap-16 text-2xl'>
                    <li>
                        <Link to='/' className='font-bold underline' onClick={() => nav.setNav(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='font-bold underline' onClick={() => nav.setNav(false)}>About Me</Link>
                    </li>
                    <li>
                        <Link to='/works' className='font-bold underline' onClick={() => nav.setNav(false)}>My Works</Link>
                    </li>
                    <li>
                        <Link to='/blog' className='font-bold underline' onClick={() => nav.setNav(false)}>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;