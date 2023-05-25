import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import dict1 from '../../images/Dict/dict-1.jpeg'
import dict2 from '../../images/Dict/dict-2.jpeg'
import dict3 from '../../images/Dict/dict-3.jpeg'
import Footer from '../Footer'

const Dictionary = () => {

    const images = [dict1, dict2, dict3]

    return ( 
        <div className='flex flex-col gap-8 bg-black bg-opacity-80 text-white py-4 items-center'>
            <h1 className='text-3xl text-center w-4/5 font-black'>ENGLISH DICTIONARY</h1>
            <p className='w-4/5 text-xl text-justify'>
                This is a simple English dictionary which makes use of 3rd party API - Merriam Webster - to return the definitions, transcriptions, and pronunciations of words, as well as their parts of speech.
            </p>
            <p className='w-4/5 flex flex-col gap-4'>
                <span className='text-2xl font-black'>Stacks used:</span>
                <ul className='flex flex-col gap-2 text-xl'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </p>

            <div className='w-4/5'>
            <Slide className=''>
                {images.map((image, index) => (
                    <div key={index} className='flex justify-center h-48'>
                        <img src={image} alt="dict" className='border-2 border-green-700'/>
                    </div>
                    ))}
            </Slide>
            </div>
            

            <a href="https://js-dictionary-josh.netlify.app/" className='w-4/5 bg-zinc-400 hover:bg-yellow-400'>
                <button className='w-full text-xl text-center py-2 font-black text-black'>View Live Project</button>
            </a>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default Dictionary;