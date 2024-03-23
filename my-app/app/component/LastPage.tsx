import { Container } from "./Container";

interface messageProps {
  message: string;
}

export const LastPage: React.FC<messageProps> = ({ message }) => {
  return (
    <div className="container h-screen mx-auto p-4">
      <div className="flex flex-col md:flex-col justify-center items-center h-[300px] mb-12 bg-center bg-cover custom-img">
        {/* overlay */}
        <div className="top-0 absolute right-0 bottom-0 left-0 bg-black/10 z-[2]" />
        <div className="p-5 text-white z-[2] ">
          <h1 className="text-3xl font-bold">{message}</h1>
          <p className="text-xl py-5">picgoo</p>
          <hr />
        </div>
      </div>
      <>
        <Container>
          <div className="flex flex-col md:flex-row min-h-[600px] gap-3 bg-white ">
            <div className=" mb-12 bg-center bg-cover w-[500px] custom-img" />
            <div className=" w-[500px] mb-12 bg-center bg-cover custom-img" />

            <div className="m-auto   text-start ml-5">
              <h1 className="text-2xl">
                Meet The Artists <br />
                Behind The Corsen <br />
                Maria & Sophia
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vel doloremque ex nobis inventore fugiat nesciunt{" "}
              </p>
              <button className="py-2 px-4 border mt-3">
                Textiles fashion
              </button>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};
