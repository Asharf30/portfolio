import SectionHeader from "../components/ui/SectionHeader";
import LinkButton from "../components/ui/LinkButton";
import { LuSend } from "react-icons/lu";
const Contact = () => {
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
          <div className="relative isolate rounded-2xl">
            <div
              className="gradient-ring gradient-ring-rotate"
              style={{ borderRadius: 'inherit' }}
              aria-hidden="true"
            />
            <form className="p-6 rounded-2xl bg-surface border border-border  space-y-5 relative z-10">
              <h3 className="text-lg font-semibold text-text ">Send a message</h3>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Names"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border  text-text outline-none focus:border-primary transition "
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1 ">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition resize-none"
                />
              </div>
              <LinkButton
                as="button"
                type="submit"
                text="Send Message"
                icon={LuSend}
                iconPosition="left"
                rounded
                fullWidth
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
