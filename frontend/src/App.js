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


function App() {

  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  const {user} = useAuthContext()

  return (
    <div className={nav ? "h-screen overflow-hidden App font-lora" : "App font-lora"}>

      <div className={nav ? ' pt-8 flex justify-center bg-green-700' : 'pt-8 flex justify-center'}>
        <svg onClick={showNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>

      {nav &&
        <div>
        <Nav />
      </div>}

      <div className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/login" element={!user? <LoginForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/signup" element={!user? <SignupForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/:id" element={<BlogExtended />}/>
          <Route path="/blog/update/:id" element={<UpdateBlog />}/>
        </Routes>
      </div>

      

    </div>
  );
}

export default App;
