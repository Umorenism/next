import { Herozental } from "./Herozental";
import { NavBar } from "./NavBar";
interface HeroProps {
  heading: string;
  message: string;
}
export const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className="flex justify-center items-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="top-0 absolute right-0 bottom-0 left-0 bg-black/10 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[20rem]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-xl py-5">{message}</p>
        <button className="px-8 py-2 border">Get started</button>
      </div>
      <Herozental />
    </div>
  );
};
