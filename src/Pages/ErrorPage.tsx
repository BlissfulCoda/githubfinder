import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

export default function ErrorPage(): JSX.Element {
  return (
    <section className="h-screen flex flex-col justify-between ">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center mb-24 space-y-0 pl-4">
        <h1 className="text-white font-Inria text-[120px]">404</h1>
        <div className="text-center space-y-1">
          <h3 className="text-white font-Inria text-sm">Page Not Found</h3>
          <p className="text-white opacity-50 text-xs">
            Sorry, we cant seem to find the page you are looking for.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
