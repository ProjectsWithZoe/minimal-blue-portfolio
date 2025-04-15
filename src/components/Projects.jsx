import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AlwaysReturn",
      description:
        "A daily coding web app that's a combination of leetcode challenges and NYT Daily Games.",
      image: "/9.png",
      technologies: [
        "React",
        "Javascript",
        "Firebase",
        " Tailwind CSS",
        "Node.js",
        "Vercel",
        "RESTFul APIs",
      ],
      github: "https://github.com/ProjectsWithZoe/code-challenge-journey",
      live: "https://www.alwaysreturn.site",
      completed: false,
    },
    {
      title: "TheWorldToday",
      description:
        "A news app filtering out news from some countries based on preference.",
      image: "/8.png",
      technologies: [
        "React",
        "Javascript",
        "Firebase",
        " Tailwind CSS",
        "Node.js",
        "Vercel",
        "RESTFul APIs",
      ],
      github: "https://github.com/ProjectsWithZoe/news-splash-surf",
      live: "https://www.theworldtoday.space",
      completed: true,
    },
    {
      title: "MatchMe",
      description:
        "A job description and CV matching app for junior developers, career switchers and other tech professionals.",
      image: "/1.png",
      technologies: [
        "React",
        "Javascript",
        "Firebase",
        " Tailwind CSS",
        "Node.js",
        "Vercel",
      ],
      github: "https://github.com/ProjectsWithZoe/jobfit-finder",
      live: "https://www.matchme.cloud",
      completed: true,
    },
    {
      title: "Wingwoman",
      description:
        "An AI powered dating and advice app that gives you sassy and meaningful advice about different life situations and problems",
      image: "/2.png",
      technologies: [
        "React",
        "Javascript",
        "Firebase",
        " Tailwind CSS",
        "Node.js",
        "Vercel",
      ],
      github: "https://github.com/ProjectsWithZoe/Wingwoman-app",
      live: "https://www.wingwoman.site",
      completed: true,
    },
    {
      title: "Funmaps",
      description:
        "An interactive map that allows tourists to see libraries, airports, museums etc near their location. Also finds news, converts currency and finds public holidays of that location.",
      image: "/3.png",
      technologies: ["HTML", "CSS", "Javascript", "jQuery", "PHP", "APIs"],
      github: "https://github.com/ProjectsWithZoe/zoeMwangi/tree/main/project1",
      live: "https://www.funmaps.co.uk",
      completed: true,
    },
    {
      title: "Company Directory",
      description:
        "A simple CRUD app that creates, reads, updates and deletes data from a company directory to maintain their employee, location and department directory.",
      image: "/4.png",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap CSS",
        "Javascript",
        "jQuery",
        "PHP",
        "APIs",
      ],
      github: "https://github.com/ProjectsWithZoe/zoeMwangi/tree/main/project2",
      live: "https://www.project2-sandy-tau.vercel.app",
      completed: true,
    },
    {
      title: "Pats Kitchen",
      description:
        "A personal website that showcases a soloprenuers catering website. Has a contact form, various menus and implements a whatsapp chat icon for easy contact.",
      image: "/5.png",
      technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Vercel"],
      github: "https://github.com/ProjectsWithZoe/Pats-Kitchen-Website",
      live: "https://pats-kitchen-website.vercel.app",
      completed: true,
    },
    {
      title: "Trusted Portfolio",
      description:
        "A website creation website tailored to solo individuals, e-commerce business owners or people looking to rebuild their websites.",
      image: "/6.png",
      technologies: ["HTML", "CSS", "Javascript", "Cardd", "React"],
      github: "#",
      live: "https://www.trustedportfolio.com",
      completed: true,
    },
  ];

  const completedProjects = projects.filter((project) => project.completed);
  const ongoingProjects = projects.filter((project) => !project.completed);

  return (
    <section id="projects" className="py-4 border-t border-white/10">
      <div className="section-container">
        {/* Featured Projects Section */}
        {completedProjects.length > 0 && (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Here are some of my recent projects. Each one was built to solve
                a specific problem or explore new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}

        {/* Ongoing Projects Section */}
        {ongoingProjects.length > 0 && (
          <>
            <div className="mt-16 mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 mt-8">Ongoing Projects</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                These are projects that are still in progress and under active
                development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Fixed Props Destructuring in ProjectCard
const ProjectCard = ({ project, index }) => (
  <div
    className="project-card group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className=" object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60"></div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-white/70 mb-4 text-sm">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-2 border rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          className="text-white hover:text-blue-light flex items-center gap-1 text-sm"
        >
          <Github size={16} />
          Code
        </a>
        <a
          target="_blank"
          href={project.live}
          className="text-white hover:text-blue-light flex items-center gap-1 text-sm"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
