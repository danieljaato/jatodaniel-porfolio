const navLinks = [
  { href: "#/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
{ href: "#blog", label: "Blog" },
  { href: "#testimonials", label: "Testimonials" },
   { href: "#contact", label: "Contact" },
];

import {Download} from "lucide-react";


import Button from "../Components/Button.jsx";
import { Menu ,X} from "lucide-react";
import { useState, useEffect } from "react"; 
const Navbar =()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        < header  className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
      isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
    } z-50`}>
            <nav className="container mx-auto px-6 flex  items-center justify-between">
                <a href="/" className="text-xl font-bold tracking -tight hover:text-primary" >
                JATO DANIEL <span className="text-primary"> .</span>
                    </a>
                    
                    <div className=" hidden md:flex items-center gap-2">
                      
                        <div className=" glass rounded-full px-2 py-1 items center gap-1">
                           <a href = "/" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Home</a>
                        <a href = "#about" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">About</a>
                        <a href = "#project" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Project</a>
                        <a href = "#blog"className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Blog</a>
                        <a href = "#contact" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Contact</a>
                       </div>
                    </div>
                    <div  className=" hidden md:block">
                      <Button size="sm">
  <span className="flex items-center gap-2">
    <Download className="w-5 h-5" />
    Download CV
  </span>
</Button>

                    </div>
                   
            
  
            
           
                {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground "
            >
              {link.label}
            </a>
          ))}

          <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
        </div>
               </div>
              ) 
            }
        </header>

    );
};
export default Navbar;