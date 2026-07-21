interface TechBadgeProps {
  name: string;
}

export default function TechBadge({
  name,
}: TechBadgeProps) {
  return (
    <div
      className="
        rounded-full
        border
        border-border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {name}
    </div>
  );
}