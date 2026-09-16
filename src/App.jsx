import Footer from "./layout/FooterTem.jsx";
import  Navbar from "./layout/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from"./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Blog from "./sections/Blog.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import  Contact from "./sections/Contact.jsx";
function App(){
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
    < Footer />
  </div>;
}

export default App;
