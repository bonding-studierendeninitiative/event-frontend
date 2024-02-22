type EventTitleProps = {
  title: string;
};
export function EventTitle({ title }: EventTitleProps) {
  return <h3 className="m-0 text-xl font-semibold">{title}</h3>;
}
