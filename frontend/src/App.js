import Blog from "./components/Blog";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";
import {Routes, Route, Navigate} from 'react-router-dom'
import SignupForm from "./components/SignupForm";
import { useAuthContext } from "./hooks/useAuthContext";
import BlogExtended from "./components/BlogExtended";
import UpdateBlog from "./components/UpdateBlog";
import Footer from "./components/Footer";
import { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Dictionary from "./components/ProjectPages/Dictionary";
import BlogProject from "./components/ProjectPages/BlogProject";
import Joses from "./components/ProjectPages/Joses";


function App() {

  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  const {user} = useAuthContext()

  return (
    <div className={nav ? "h-screen overflow-hidden App font-lora" : "App font-lora"}>

      <div className='py-8 bg-green-700 flex justify-center max-h-24'>
        <svg onClick={showNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer burger">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>

      {nav &&
        <div>
        <Nav nav={{nav, setNav}}/>
      </div>}

      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/login" element={!user? <LoginForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/signup" element={!user? <SignupForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/:id" element={<BlogExtended />}/>
          <Route path="/blog/update/:id" element={<UpdateBlog />}/>
          <Route path="/works/dictionary" element={<Dictionary />}/>
          <Route path="/works/blog" element={<BlogProject />}/>
          <Route path="/works/joses" element={<Joses />}/>
        </Routes>
      </div>

      

    </div>
  );
}

export default App;
