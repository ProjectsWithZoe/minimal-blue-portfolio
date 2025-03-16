import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus(
          "Thanks for your message! I will get back to you soon."
        );
      } else {
        setSubmissionStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-white/70">
                I'm currently open to freelance opportunities and interesting
                projects. If you have a project that needs coding skills, don't
                hesitate to contact me.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="mailto:projectswithzoe@gmail.com"
                  className="p-3 bg-white/5 rounded-full hover:bg-blue-light/20 hover:text-blue-light transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zoemwangi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-blue-light/20 hover:text-blue-light transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/ProjectsWithZoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-blue-light/20 hover:text-blue-light transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:400ms]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light/50 text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light/50 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light/50 text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
            {submissionStatus && (
              <p className="text-center text-white mt-4">{submissionStatus}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
