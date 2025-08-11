import DropBounceText from "../components/DropBounceText";
import TypeAnimation from "../components/TypeAnimation";
import MagneticIcon from "../components/MagneticIcon";
import { scrollToSection } from "../components/ScrollTo";

function HomePage() {
  return (
    <div className="flex min-h-screen" id="home">
      <main className="flex-1 bg-white text-black py-[10vh] relative">
        <div className="flex justify-center items-center text-[300px] font-bold w-full h-full">
          HRITISHA
        </div>
        <div className="text-[40px] font-light absolute right-5 bottom-22">
          Step into my creative space, where ideas become stories.
        </div>
      </main>
    </div>
  );
}

export default HomePage;
