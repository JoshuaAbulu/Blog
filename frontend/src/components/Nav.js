import {Link} from 'react-router-dom'

const Nav = () => {
    return ( 
        <div className='bg-green-700 p-8'>
            <ul className='flex justify-around'>
                <li>
                    <Link to='/' className='font-bold text-xl'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='font-bold text-xl'>About Me</Link>
                </li>
                <li>
                    <Link to='/works' className='font-bold text-xl'>My Works</Link>
                </li>
                <li>
                    <Link to='/blog' className='font-bold text-xl'>Blog</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;