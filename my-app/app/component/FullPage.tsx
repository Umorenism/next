import { Container } from "./Container";

export const FullPage = () => {
  return (
    <div className="mx-auto h-full z-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-2">Read Our Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          nam consequuntur ea perferendis quos deleniti itaque impedit non
          accusantium?
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:gap-0">
          <div>
            <div className="max-w-sm overflow-hidden shadow-lg bg-cover bg-center h-[500px] custom-img ">
              <div className="top-0 absolute right-0 bottom-0 left-0 bg-black/10 z-[2]" />
            </div>
            <div className="mt-3 flex flex-col items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              <p className="text-center">nesciunt.</p>
              <button className="py-1 mt-3 px-2  border">tooetet</button>
            </div>
          </div>
          <div>
            <div className="max-w-sm overflow-hidden shadow-lg bg-cover bg-center h-[600px] custom-img">
              <div className="top-0 absolute right-0 bottom-0 left-0 bg-black/10 z-[2]" />
            </div>
            <div className="mt-3 flex flex-col items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              <p className="text-center">nesciunt.</p>
              <button className="py-1 mt-3 px-2  border">tooetet</button>
            </div>
          </div>

          <div className="max-w-sm overflow-hidden shadow-lg bg-cover bg-center h-full custom-img">
            <div className="top-0 absolute right-0 bottom-0 left-0 bg-black/10 z-[2]" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <p className="text-center">nesciunt.</p>
            <button className="py-1 mt-3 px-2  border">tooetet</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
