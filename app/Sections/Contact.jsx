"use client";
import SectionHeader from "../components/ui/SectionHeader";
import LinkButton from "../components/ui/LinkButton";
import { LuSend, LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import { useState } from "react";
import { toast } from "react-hot-toast";
const contactInfo = [
  {
    icon: LuMail,
    title: "Email",
    value: "ashmax0109@gmail.com",
    href: "mailto:ashmax0109@gmail.com",
  },
  {
    icon: LuPhone,
    title: "Phone",
    value: "(+20) 01093265243",
    href: "https://wa.me/201093265243",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "Mansoura, Dakahlia, Egypt",
  },
];
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "e661f6ad-bdf0-4817-a010-3f9d657d296d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error("Erorr Submitting Form");
    }
    setLoading(false);
  };
  const Spinner = (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );

  return (
    <div id="contact" className="py-24 relative overflow-hidden">
      <div
        className="top-1/3 absolute right-1/4 translate-x-1/2 w-80 h-80 rounded-full
        blur-3xl bg-primary/10"
      />
      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16 ">
        <SectionHeader
          title="Lets build"
          highLight="Something Great"
          badge="Contact"
          description="We' d love to hear from you! Whether you have questions, feedback, or just want to connect, reach out and let's make it happen."
        />
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 ">
          <div data-aos="fade-right" data-aos-delay="100" className="relative isolate rounded-2xl">
            <div
              className="gradient-ring gradient-ring-rotate"
              style={{ borderRadius: "inherit" }}
              aria-hidden="true"
            />
            <form
              onSubmit={onSubmit}
              className="p-6 rounded-2xl bg-surface border border-border  space-y-5 relative z-10"
            >
              <h3 className="text-lg font-semibold text-text ">
                Send a message
              </h3>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Names"
                  className="form-input-glow w-full px-4 py-2 rounded-lg bg-background border border-border  text-text outline-none focus:border-primary transition "
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="form-input-glow w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message here"
                  className="form-input-glow w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition resize-none"
                />
              </div>
              <LinkButton
                as="button"
                type="submit"
                text={loading ? "Sending..." : "Send Message"}
                icon={loading ? Spinner : LuSend}
                iconPosition="left"
                rounded
                fullWidth
                disabled={loading}
              />
            </form>
          </div>
          {/* right */}
          <div data-aos="fade-left" data-aos-delay="150" className="p-2 ">
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  data-aos="fade-up"
                  data-aos-delay={`${200 + index * 80}`}
                  className="contact-info-card flex items-center  gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="contact-icon-wrap w-12 h-12 rounded-xl bg-primary/10 flex justify-center items-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary w-5 h-5 " />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
