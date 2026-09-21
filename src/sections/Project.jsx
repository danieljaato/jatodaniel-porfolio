import da from "../assets/da.png";
import de from "../assets/de.png";
import m1 from "../assets/m1.png";
import { ArrowUpRight, } from "lucide-react";
import { FaGithub, } from "react-icons/fa6";
const projects = [
  {
    title: "Wellness & Treatment Catalog",
    description:
      "A responsive product and service catalog with dynamic filters for spa treatments, package bundles, and custom booking requests.",
    image: m1,
    tags: ["React", "Typescript", ],
    link: "https://prestige-spa.vercel.app/",
    github: "",
  },

  

   {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visua...",
    image: m1,
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "",
  },

   {
    title: "Automotive Performance Dashboard",
    description:
      " A futuristic automotive interface showcasing high-speed telemetry metrics, electric powertrain specs, interactive vehicle features, and direct booking CTA workflows.",
    image: da,
    tags: ["React", "Typescript"],
    link: "https://jat-autos.vercel.app/",
    github: "",
  },

   {
    title: "Pet Care Services & Booking Platform",
    description:
      " A responsive web application featuring service grids, appointment scheduling, pet care packages, and interactive booking forms.",
    image: de,
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://pet-hub-lake.vercel.app/",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section id="project" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl md-16">
          <span className="text-secondary-foregrounded text-sm font-medium tracking-wide uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
                {""}
                 make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work,
             from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>
         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project,idx) =>(
                <div key={idx} className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
                      {/* Image */}
                      <div className=" relative overflow-hidden aspect-video">
                        <img src={project.image} alt={project.title}  className="w-ull object-cover transiton-transform duration-700 group -hover:scle-110"/>
                        <div
                        className=" absolute inset-0
                        bg-gradient-to-t form-card via-card/50
                        to- transparent opacity-60"/>
                         {/* Image */}
                         <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5" />

                            </a>

                           <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all">
                                <  FaGithub className="w-5 h-5" />

                            </a>
 
                        </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary">{project.title}</h3>
                                <ArrowUpRight  className=" w-5 h-5 text-muted-foreground group-hover:text
                                -primary grounp :translate-x-1
                                group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="flex flex-wrap gap-2">{project.description}</p>
                                <div>
                                    {project.tags.map((tag,tagIdx) =>(
                                        <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 runed-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}

                        </div>
                        </div>
                        </div>
            ))}
         </div>
      </div>
    </section>
  );
};
export default Projects;