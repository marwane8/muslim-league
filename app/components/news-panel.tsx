type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function NewsPanel({ title, children }: Props) {
  return (
    <div className="m-auto my-5 max-w-screen-sm rounded-md bg-white px-5 pb-3">
      <h1 className="b mb-2 border-b py-2 font-bold"> {title} </h1>
      {children}
    </div>
  );
}
