import Logo from "../components/navnar/Logo";
import { LuFacebook, LuLinkedin, LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: LuGithub,
    href: "https://github.com/Asharf30",
    label: "GitHub",
  },
  {
    icon: LuLinkedin,
    href: "https://www.linkedin.com/in/ashraf-osama-45164031b/",
    label: "LinkedIn",
  },
  {
    icon: LuFacebook,
    href: "https://www.facebook.com/asharf.12654",
    label: "Facebook",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/201093265243",
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl space-y-10 py-14">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-start md:text-left">
          {/* Left */}
          <div data-aos="fade-up" className="max-w-xs space-y-3">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>

            <p className="text-sm text-gray-300">
              Ready to take your digital presence to the next level?
            </p>
          </div>

          {/* Social Icons */}
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon-hover flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Shimmer Divider */}
        <div
          data-aos="fade-in"
          data-aos-delay="120"
          className="section-divider-shimmer"
        />

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashraf Osama. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
