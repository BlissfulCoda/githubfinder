import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home(): JSX.Element {
  return (
    <section>
      <div className="h-screen flex flex-col justify-between ">
        <Navbar />
        <div className="container mx-auto font-Lustria text-white tracking-widest font-thin space-y-2 flex flex-col items-center justify-center mb-24">
          {" "}
          <p className="text-5xl ">GITHUB</p>
          <hr className="text-white w-36 opacity-50" />
          <p className="text-xs">FINDER!</p>
        </div>
        <Footer />
      </div>
    </section>
  );
}
