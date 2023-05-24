import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <div className='bg-green-700 p-8 py-16 flex justify-center mt-4'>
        <ul className='flex flex-col gap-4 justify-around'>
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
 
export default Footer;