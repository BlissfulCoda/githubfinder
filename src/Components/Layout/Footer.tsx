export default function Footer(): JSX.Element {
  const footerYear: number = new Date().getUTCFullYear();
  return (
    <div className="mb-32 sm:mb-2 p-2 md:mb-6">
      <p className="text-zinc-400 text-[7px] text-center">
        Copyright &copy; {footerYear}
      </p>
    </div>
  );
}
