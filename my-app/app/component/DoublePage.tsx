import { Container } from "./Container";
import Image from "next/image";
export const DoublePage = () => {
  return (
    <div className="min-h-[500px]">
      <Container>
        <div className="grid sm:gap- lg:grid-cols-2">
          <div
            className=" col-span-1 h-[500px] bg-cover bg-center"
            style={{ backgroundImage: "url(/download.png)" }}
          >
            <p className="flex justify-center flex-col text-white mt-52 text-2xl items-center">
              Male
              <button className="py-2 px-1  w-52 border-[1px] border-gray-300 mt-2">
                Male fashion
              </button>
            </p>
          </div>
          <div
            className="col-span-1  h-[500px] bg-cover bg-center"
            style={{ backgroundImage: "url(/images.jpg)" }}
          >
            <p className="flex flex-col justify-center text-white mt-52 text-2xl items-center">
              FeMale
              <button className="py-2 px-1  w-52 border-[1px] border-gray-300 mt-2">
                women fashion
              </button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
