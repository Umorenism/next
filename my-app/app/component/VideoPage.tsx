import { Container } from "./Container";
export const VideoPage = () => {
  return (
    <div className="  min-h-[500px] ">
      <div className=" flex flex-col justify-center items-center text-center ">
        <p className="mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo culpa
          dolorem tenetur vero nam distinctio praesentium sit, excepturi natus
          asperiores.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
          pariatur.
        </p>
      </div>
      <div className="flex justify-center items-center md:flex-row gap-10 w-auto mt-28">
        <div className="mr-5">BOUTIQUE</div>
        <div className="mr-5">OXO</div>
        <div className="mr-5">🌫🌫🌫🌫</div>
        <div className="mr-5">BOUTIQUEQUE</div>
      </div>
      <Container>
        <div className="flex justify-center items-center h-[500px] bg-cover video-img mb-12 ">
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/70 z-[2]" />
          <div>
            <div className="relative ">
              <div className="bg-black rounded-full h-10 w-10 text-white flex items-center justify-center ml-16 absolute bottom-[180px]">
                v
              </div>
            </div>
            <h1 className="text-4xl text-white">ONYX-THE FLOW</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};
