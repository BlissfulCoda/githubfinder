import spinner from "../../assets/spinner.gif";

export default function Spinner(): JSX.Element {
  return (
    <div className="w-100 h-screen flex flex-col justify-center items-center">
      <img
        width={180}
        className="text-center mx-auto w-32 h-32"
        src={spinner}
        alt="loading..."
      />
    </div>
  );
}
