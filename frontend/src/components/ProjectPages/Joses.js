import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import joses1 from '../../images/Joses/joses-1.jpeg'
import joses2 from '../../images/Joses/joses-2.jpeg'
import joses3 from '../../images/Joses/joses-3.jpeg'
import joses4 from '../../images/Joses/joses-4.jpeg'
import Footer from '../Footer'

const Joses = () => {

    const images = [joses1, joses2, joses3, joses4]

    return ( 
        <div className='flex flex-col gap-8 bg-black bg-opacity-80 text-white py-4 items-center'>
            <h1 className='text-3xl text-center w-4/5 font-black'>AN E-COMMERCE STORE</h1>
            <p className='w-4/5 text-xl text-justify'>
                This is an e-commerce store for a company that sells hospital equipment and consumables, as well as baby products.
                <br />
                Users have the option to add items to cart and proceed to the checkout page where the total sum of all they've picked, with shipping fee has been calculated for them. They can then proceed to pay online or pay on delivery.
            </p>
            <p className='w-4/5 flex flex-col gap-4'>
                <span className='text-2xl font-black'>Stacks used:</span>
                <ul className='flex flex-col gap-2 text-xl'>
                    <li>React</li>
                    <li>TailwindCSS</li>
                </ul>
            </p>

            <div className='w-4/5'>
            <Slide className=''>
                {images.map((image, index) => (
                    <div key={index} className='flex justify-center h-48'>
                        <img src={image} alt="joses" className='border-2 border-green-700'/>
                    </div>
                    ))}
            </Slide>
            </div>
            

            <a href="https://josesstores.netlify.app/" className='w-4/5 bg-zinc-400 hover:bg-yellow-400'>
                <button className='w-full text-xl text-center py-2 font-black text-black'>View Live Project</button>
            </a>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default Joses;