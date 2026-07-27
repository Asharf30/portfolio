import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";
interface ProjectsCardProps {
  title: string;
  description: string;
  liveURL?: string;
  githubURL: string;
  image: string;
  tags?: string[];
}

const ProjectsCard = ({
  title,
  description,
  liveURL,
  githubURL,
  image,
  tags,
}: ProjectsCardProps) => {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="relative h-60 overflow-hidden sm:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100"></div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-text transition group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-md border border-border bg-primary/10 px-2.5 py-1 text-xs"
            >
              {tag}{" "}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-6">
          {liveURL && (
            <Link
              href={liveURL}
              target="_blank"
              className="flex items-center gap-1 text-sm text-text transition hover:text-primary"
            >
              <LuExternalLink className="h-4 w-4" />
              Live
            </Link>
          )}
          {githubURL && (
            <Link
              href={githubURL}
              target="_blank"
              className="flex items-center gap-1 text-sm text-text transition hover:text-primary"
            >
              <LuGithub className="h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
