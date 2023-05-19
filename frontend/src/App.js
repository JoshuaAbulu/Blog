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


function App() {

  const {user} = useAuthContext()

  return (
    <div className="App font-lora">

      <div className=''>
        <Nav />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/login" element={!user? <LoginForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/signup" element={!user? <SignupForm /> : <Navigate to='/blog'/>}/>
          <Route path="/blog/:id" element={<BlogExtended />}/>
          <Route path="/blog/update/:id" element={<UpdateBlog />}/>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
