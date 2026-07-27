interface SectionHeaderProps {
  title: string;
  badge?: string;
  highLight?: string;
  description?: string;
}

const SectionHeader = ({
  title,
  badge,
  highLight,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4 ">
      {badge && (
        <span className="animated-badge text-sm bg-primary/10 px-4 py-1.5 rounded-e-full inline-block border border-border">
          <span className="badge-text">{badge}</span>
        </span>
      )}
      <h2 className="text-3xl   md:text-4xl font-bold text-text leading-tight">
        {title} {highLight && <span className="text-primary">{highLight}</span>}
      </h2>

      {description && (
        <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
