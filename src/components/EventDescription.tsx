type EventDescriptionProps = {
  description: string;
};

export function EventDescription({ description }: EventDescriptionProps) {
  return (
    <p className="text-smaller line-clamp-3 m-0 t-neutral-60 overflow-hidden text-sm">
      {description}
    </p>
  );
}
