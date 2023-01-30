import spinner from "../assets/spinner.gif";

export default function Spinner(): JSX.Element {
  return (
    <div className="w-100">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="loading..."
      />
    </div>
  );
}
