import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="flex items-center pt-4 pb-4">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-light mb-4 text-2xl animate-fade-in [animation-delay:200ms]">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in [animation-delay:400ms]">
            Zoe Mwangi
          </h1>
          <h2 className="text-xl md:text-3xl text-white/80 mb-8 animate-fade-in [animation-delay:600ms]">
            Full Stack Developer
          </h2>
          <p className="text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:800ms]">
            I build responsive web applications with modern technologies.
            Passionate about creating clean, efficient, and user-friendly
            digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in [animation-delay:1000ms]">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
