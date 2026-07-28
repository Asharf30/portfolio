import SectionHeader from "../components/ui/SectionHeader";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiAxios,
  SiGit,
} from "react-icons/si";
import {
  LuNetwork,
  LuSearchCheck,
  LuGauge,
  LuMonitorSmartphone,
  LuPanelsTopLeft,
} from "react-icons/lu";

const skills = [
  { name: "Next.js", icons: [SiNextdotjs] },
  { name: "TypeScript", icons: [SiTypescript] },
  { name: "React.js", icons: [SiReact] },
  { name: "JavaScript", icons: [SiJavascript] },
  { name: "HTML", icons: [SiHtml5] },
  { name: "CSS", icons: [SiCss] },
  { name: "Tailwind CSS", icons: [SiTailwindcss] },
  { name: "Framer Motion", icons: [SiFramer] },
  { name: "Redux Toolkit", icons: [SiRedux] },
  { name: "Axios", icons: [SiAxios] },
  { name: "Git", icons: [SiGit] },
  { name: "REST APIs", icons: [LuNetwork] },
  { name: "SEO Best Practices", icons: [LuSearchCheck] },
  { name: "Web Performance Optimization", icons: [LuGauge] },
  { name: "Responsive Design", icons: [LuMonitorSmartphone] },
  { name: "Cross-Browser Compatibility", icons: [LuPanelsTopLeft] },
];

const Skills = () => {
  return (
    <div id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <SectionHeader
          badge="Skills"
          title="My Technical "
          highLight="Skills"
          description="Technologies and tools I use to build modern web experiences."
        />

        <div data-aos="fade-up" className="skills-grid mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ '--card-index': index }}
              className="skill-card group flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(32,178,166,0.15)]"
            >
              {/* Icon wrapper */}
              <div className="relative isolate mb-3 flex h-14 w-14 items-center justify-center rounded-full">
                {/* Gradient ring */}
                <div className="skill-icon-ring" aria-hidden="true" />

                {/* Icon surface */}
                <div className="relative z-10 flex h-[calc(100%-6px)] w-[calc(100%-6px)] items-center justify-center rounded-full bg-background/80">
                  {skill.icons.length === 1 ? (
                    (() => {
                      const Icon = skill.icons[0];
                      return (
                        <Icon className="h-6 w-6 text-primary transition-transform duration-300 ease-out group-hover:scale-110" />
                      );
                    })()
                  ) : (
                    <div className="flex gap-1">
                      {skill.icons.map((Icon, i) => (
                        <Icon
                          key={i}
                          className="h-4 w-4 text-primary transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Skill name */}
              <p className="text-sm text-text transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
