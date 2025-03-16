
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart, and checkout functionality.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Messaging platform featuring real-time communication with websockets and user authentication.",
      image: "/placeholder.svg",
      technologies: ["React", "Socket.io", "Express", "JWT"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "Productivity application with drag-and-drop UI, task assignments, and progress tracking.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first web app for tracking workouts, progress, and nutrition with data visualization.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Redux", "Express", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe sharing site with search functionality and user profiles.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "PostgreSQL", "Auth0", "Vercel"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecasting application with location-based data and interactive maps.",
      image: "/placeholder.svg",
      technologies: ["React", "Weather API", "Leaflet", "Styled Components"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-blue-light/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-white hover:text-blue-light flex items-center gap-1 text-sm">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.live} className="text-white hover:text-blue-light flex items-center gap-1 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
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
