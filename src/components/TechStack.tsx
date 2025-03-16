import { Code, Database, Server, LayoutGrid, Fingerprint } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <LayoutGrid size={32} className="text-blue-accent" />,
      skills: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "jQuery",
      ],
    },
    {
      category: "Backend",
      icon: <Server size={32} className="text-blue-accent" />,
      skills: ["Node.js", "Express", "Python", "PHP", "APIs"],
    },
    {
      category: "Database",
      icon: <Database size={32} className="text-blue-accent" />,
      skills: ["PostgreSQL", "MySQL", "Firebase", "AWS"],
    },
    {
      category: "Development & Hosting",
      icon: <Code size={32} className="text-blue-accent" />,
      skills: ["Git", "CI/CD", "Testing", "Vercel", "Heroku", "Hostinger"],
    },
    {
      category: "Design tools",
      icon: <Fingerprint size={32} className="text-blue-accent" />,
      skills: [
        "Responsive Design",
        "UI/UX",
        "Canva",
        "DesignUI",
        "Fontawesome icons",
      ],
    },
  ];

  return (
    <section className=" border-t border-white/10">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are the technologies and tools I've worked with and enjoy
            using.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-light/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
