import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mandgbzq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 neon-text">
          CONTACT
        </h2>

        <div className="h-[2px] w-16 mx-auto gradient-neon rounded-full mb-12" />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-foreground/80 font-body text-lg leading-relaxed">
              Have a project in mind? Let's build something extraordinary together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="font-mono text-sm">
                  umarimran2504@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="font-mono text-sm">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 gradient-neon rounded-sm flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;