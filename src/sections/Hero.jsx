import ProfileImage from "../assets/ProfileImage.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { ArrowRight, Download,ChevronDown  } from "lucide-react";
import herobackground from "../assets/Image/herobackground.png";
import Button from "../Components/Button.jsx";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 1. Background Image Layer */}
      <div className="   absolute inset-0 z-0">
        <img
          src={herobackground}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* 2. Gradient Overlay Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* 3. Animated Dots Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

     <div className="relative container mx-auto px-6 pt-32 pb-20 z-10">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT COLUMN */}
    <div className="space-y-8">

      {/* Pill Badge */}
      <div className="animate-fade-in">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#20b2a6]/10 border border-[#20b2a6]/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-[#20b2a6]">
            Software Engineer . React Specialist
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
        crafting <span className="text-[#20b2a6]">digital</span>
        <br />
        experiences with
        <br />
        <span className="font-serif italic font-normal">
          precision
        </span>
      </h1>

      {/* Paragraph */}
      <p className="text-lg text-gray-300 max-w-lg">
        I'm Jato Daniel - a Software Engineer Specializing in React,
        Next.js and TypeScript. I build scalable, performant web
        applications that users love.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
        <Button size="lg">
          Contact Me
          <ArrowRight className="w-5 h-5" />
        </Button>

        <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 A 29,29 0 0 0 170,1 Z"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeDasharray="400 550"
              strokeDashoffset="400"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="download-cv-path"
            />
          </svg>

          <span className="relative z-10 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </span>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4 animate-fade-in">
        <span className="text-sm text-muted-foreground">
          Follow Me:
        </span>

        {[
          { icon: FaGithub, href: "https://github.com/danieljaato" },
          { icon: FaLinkedin, href: "www.linkedin.com/in/daniel-jato-879ab2432" },
          { icon: FaTwitter, href: "#" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

    </div>


    {/* RIGHT COLUMN - PROFILE IMAGE */}
    <div className="relative animate-fade-in animation-delay-300">

      <div className="relative max-w-md mx-auto">

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

        <div className="relative glass rounded-3xl p-2 glow-border">

          <img
            src={ProfileImage}
            alt="Jato Daniel"
            className="w-full aspect-[4/5] object-cover rounded-2xl"
          />

          {/* Available badge */}
          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-bold font-medium text-green-200 ">
                Available for work
              </span>
            </div>
          </div>

          {/* Stats */}
          
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-8 py-4"
                >
                  <span className="text-xl font-semibold text-muted-foreground/50">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>


<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
</section>

  );
};

export default Hero;
