import SectionHeader from "../components/ui/SectionHeader";
import ProjectsCard from "../components/projects/ProjectsCard";
const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "Asharf Online Store — a responsive React e-commerce app (built with Vite) featuring product browsing by category, cart/favorites, live search, and a blog, powered by the DummyJSON API.",
      image: "/images/p1.png",
      tags: ["React", "Vite", " DummyJSON API"],
      liveURL: "https://ecommerce-ashraf.vercel.app/",
      githubURL: "https://github.com/Asharf30/ECOMMERCE",
    },
    {
      title: " Dashboard Website",
      description:
        "Shoppy Admin Dashboard  A responsive React admin dashboard for e-commerce, featuring data grids, charts, kanban, calendar, and a customizable light/dark theme, built with Vite, Tailwind CSS, and Syncfusion components.",
      image: "/images/p2.png",
      tags: ["React", "Tailwind CSS", " Syncfusion components"],
      liveURL: "https://dashboard-ashraf.vercel.app/",
      githubURL: "https://github.com/Asharf30/Dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and contact features with smooth animations and modern design.",
      image: "/images/portfolio.png",
      tags: ["Next.js", "Tailwind CSS", "GSAP"],
      githubURL: "https://github.com/Asharf30/portfolio",
    },

    {
      title: "Awwwards-Winning Website",
      description:
        "Zentry — An interactive landing page for a gaming metaverse, built with React, TypeScript, and Tailwind CSS. Features GSAP-powered animations, a bento grid layout, and lazy-loaded media for smooth performance.",
      image: "/images/p3.png",
      tags: ["React", " Tailwind CSS", " GSAP"],
      liveURL: "https://awwards-winning-ashraf.vercel.app/",
      githubURL: "https://github.com/Asharf30/Awwards-winning",
    },
    {
      title: "Prayer Times",
      description:
        "A responsive Arabic RTL React app showing live Islamic prayer times for Egyptian cities with a real-time countdown to the next prayer, wrapped in an animated night-sky UI..",
      image: "/images/p5.png",
      tags: ["React", "Framer Motion", " Adhan.js"],
      liveURL: "https://prayer-times-ashraf.vercel.app/",
      githubURL: "https://github.com/Asharf30/prayer-times",
    },
    {
      title: "Brainwave Website",
      description:
        "Brainwave is a modern, responsive landing page for an AI-powered chat app, built with React, Vite, and Tailwind CSS v4, featuring GSAP animations and React Router navigation. Developed using a Spec-Driven Development workflow with the Spec-Kit toolkit.",
      image: "/images/p4.png",
      tags: ["React", "Spec-Kit Driven", " Tailwind CSS"],
      liveURL: " https://brainwave-two-ashraf.vercel.app/",
      githubURL: "https://github.com/Asharf30/Brainwave",
    },
  ];
  return (
    <div className="relative py-24 overflow-hidden" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <SectionHeader
          title="My Recent "
          highLight="Work"
          badge="Projects"
          description="A selection of projects showcasing my ability to design, build, and scale modern fullstack applications."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${100 + index * 100}`}
            >
              <ProjectsCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
