import me2 from '../images/me2.jpg'
import Footer from './Footer';

const About = () => {
    return ( 
        <div className="all flex flex-col items-center gap-8 pt-4 bg-black opacity-80 text-white">
            <div>
                <h1 className='text-center text-3xl font-black'>ABOUT <br /> <span className=' text-yellow-400'>ME</span> </h1>
            </div>
            <div className="pic-and-bio flex flex-col gap-4 w-4/5">
                <div className="pic flex justify-center items-center">
                        <img src={me2} alt="me" className='h-48 w-48 rounded-full img' />
                </div>
                <div className="bio flex flex-col justify-center px-4 text-justify text-lg font-black gap-2">
                    <h2 className='text-center text-2xl text-yellow-400'>
                        Bio
                    </h2>
                    <p>
                        I'm a self-taught full stacck web developer, 23 years of age, and I reside in Ogun State, Nigeria.
                    </p>
                </div>
            </div>

            <div className="skills w-4/5 flex flex-col gap-4 border-b-yellow-400 border-b-4 p-2 bg-zinc-900">
                <h2 className='text-2xl font-black text-center text-yellow-400'>Skills</h2>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-black italic'>My hard skills include, but are not limited to:</h3>
                    <ul className='grid grid-cols-1 text-lg font-bold list-disc list-inside'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-black italic'>My soft skills include, but are not limited to:</h3>
                    <ul className='grid grid-cols-1 text-lg font-bold list-disc list-inside'>
                        <li>Critical thinking</li>
                        <li>Problem solving</li>
                        <li>Teamwork</li>
                        <li>Leadership</li>
                    </ul>
                </div>
            </div>

            <div className="education w-4/5 flex flex-col gap-4  border-b-yellow-400 border-b-4 p-2 bg-zinc-900">
                <h2 className='text-2xl font-black text-center text-yellow-400'>Education</h2>
                <ul className='list-disc list-inside text-lg font-bold'>
                    <li>BSc. Civil Engineering, University of Ibadan (2021) with Second Class Upper Degree</li>
                    <li>Front-end Developer Professional Certificate by META on Coursera</li>
                </ul>
            </div>

            <div className="hobbies flex flex-col gap-4 w-4/5  border-b-yellow-400 border-b-4 p-2 bg-zinc-900">
                <h2 className='text-2xl font-black text-center text-yellow-400'>Hobbies and Interests:</h2>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-black italic'>Apart from coding, things I have interest in are:</h3>
                    <ul className='list-disc list-inside text-lg font-bold'>
                        <li>Music: Playing musical instruments, preferably keyboard and violin</li>
                        <li>Chess: 1900 rapid rating on Lichess</li>
                        <li>Math: Never taught in a school, but I've taught relatives and friends privately</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-black italic'>Things I do for fun:</h3>
                    <ul className='list-disc list-inside text-lg font-bold'>
                        <li>Anime</li>
                        <li>Football</li>
                        <li>Video games</li>
                    </ul>
                </div>

            </div>

            <div className='w-full'>
                <Footer />
            </div>
        </div>
     );
}
 
export default About;