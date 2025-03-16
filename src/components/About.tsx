
const About = () => {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-white/80">
              <p>
                Hi there! I'm a passionate full-stack developer with over 5 years of experience building
                web applications. I specialize in creating efficient, scalable, and user-friendly solutions
                that solve real-world problems.
              </p>
              <p>
                My journey in software development began during college when I built my first web application.
                Since then, I've worked with startups and established companies to deliver high-quality software
                products across various domains including e-commerce, healthcare, and finance.
              </p>
              <p>
                I love working with modern technologies and constantly strive to learn new tools and methodologies.
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
              </p>
              <p>
                My approach to development focuses on writing clean, maintainable code and creating intuitive user experiences.
                I believe in the power of technology to make a positive impact, and I'm always looking for new challenges
                that push me to grow as a developer.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="w-full h-80 bg-blue-light/20 rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-dark via-transparent to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-light/30 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-accent/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
