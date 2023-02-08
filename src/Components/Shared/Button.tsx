type ButtonTypes = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonTypes): JSX.Element {
  return (
    <button className=" flex justify-center items-center p-1 rounded-full">
      {children}
    </button>
  );
}
